export default function NavBar(){
    return(
        <div class="NavBar">
            <div class="header">
                <h1>Disk Utilities</h1>
                <h3>By jesus Lozano</h3>
            </div>
            <div class="buttons">
                <h4 onClick={() => globalThis.location.href="/"}>Home</h4>
                <div class="divider"/>
                <h4 onClick={() => globalThis.location.href="/backupMaker"}>Backup Maker</h4>
                <div class="divider"/>
                <h4 onClick={() => globalThis.location.href="/fileCleanner"}>File cleaner</h4>
                <div class="divider"/>
                <h4 onClick={() => globalThis.location.href="/diskClonner"}>Disk Clonner</h4>
            </div>
        </div>
    )
}