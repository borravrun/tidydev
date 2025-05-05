import {TrayIcon} from '@tauri-apps/api/tray';
import {defaultWindowIcon} from "@tauri-apps/api/app";
import {getCurrentWindow} from "@tauri-apps/api/window";

async function SystemTray(){
    const currentWindow = getCurrentWindow();
    const options = {
        icon: await defaultWindowIcon(),
        action: async (event) => {
            if(event.type === 'Click'){
                const isVisible = await currentWindow.isVisible();
                if(isVisible){
                    await currentWindow.hide();
                }else{
                    await currentWindow.show();

                }

            }
        }
    }

    return await TrayIcon.new(options);
}

export default SystemTray;