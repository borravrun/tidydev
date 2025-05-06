import { getCurrentWindow } from '@tauri-apps/api/window';
import { register, unregisterAll } from '@tauri-apps/plugin-global-shortcut';

async function setupGlobalHotkey() {
  try {
    const userHotkey = localStorage.getItem('userHotkey') || 'Control+Space';
    await unregisterAll(); // Important: prevent duplicate registrations
    await register(userHotkey, async (event) => {
      if (event.state === 'Pressed') {
        const currentWindow = getCurrentWindow();
        const visible = await currentWindow.isVisible();
        if (visible) {
          await currentWindow.hide();
        } else {
          await currentWindow.show();
          await currentWindow.setFocus();
        }
      }
    });
  } catch (error) {
    localStorage.removeItem('userHotkey');
    throw error;
  }
}

export default setupGlobalHotkey;
