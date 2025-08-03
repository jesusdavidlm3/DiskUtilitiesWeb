import BackupMakerDownload from "../islands/BackupMakerDownload.tsx";
import BackupMakerSourceCode from "../islands/BackupMakerSourceCode.tsx";
import NavBar from "../islands/NavBar.tsx"

export default function BackupMaker(){
    return(
        <div class="basePage">
            <NavBar/>
            <div class="contentPage">
                <h1>Backup Maker</h1>
                <img
                    class="exampleImage"
                    src="./backupMaker.png"
                    draggable={false}    
                />
                <p>
                    Backup maker is a tool for make Backups more efficiently  in less time saving you from the effort of
                    verify if every file is correctly backed up with settings for file types and other disks connected
                    to the PC you can can sit down and watch how everything works with no worries knowing your
                    information is safe.
                </p>
                <p>
                    This is an open source project that can't be distribuited or selled outside this web, it's use
                    is for free. It means no licenses and no subscriptions are needed to use it in any personal or 
                    bussiness environment and .
                </p>
                <div class="links">
                    <BackupMakerDownload/>
                    <BackupMakerSourceCode/>
                </div>
            </div>
        </div>
    )
}