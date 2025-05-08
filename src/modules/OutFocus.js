import {getCurrentWindow} from '@tauri-apps/api/window';

function OutFocus() {
    const currentWindow = getCurrentWindow();
    window.addEventListener('blur', async () => {
        await currentWindow.hide();
        console.log('blur');
    })
}

export default OutFocus;