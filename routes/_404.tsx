import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Esta pagina no existe</title>
      </Head>
      <div class="errorPage">
        <h1 class="text-4xl font-bold">404 - Page not found</h1>
        <p class="my-4">
          Parece que ah habido un error, esta pagina no existe.
        </p>
        <a href="/" class="underline">haz click aqui para volver</a>
      </div>
    </>
  );
}
