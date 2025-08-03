import { useSignal } from "@preact/signals";
import NavBar from "../islands/NavBar.tsx";

export default function Home() {
  return (
    <div class="basePage">
      <NavBar/>
      <div class="contentPage">
        <h1>Welcome!</h1>
        <p>
          Disk utilities is an apps collections that is made for make your digital life easier.
          low storage? File cleaner, Your PC is dying and you wanna be safe? Backup Maker, you are 
          switching PC? Disk clonner. There's a solution for any disk problem and it's here
        </p>
        <p>
          I made each of these to resolve diferent problems around my environment as a programmer and
          IT and i hope it can help you too in anything you need so be free to click in the solution
          you need in the navigation bar and then the download button, i would be happy if the peope
          use the tools i made. 
        </p>
      </div>
    </div>
  );
}
