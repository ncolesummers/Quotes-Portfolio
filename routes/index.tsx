/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {

  const fileNames = [];

  for (const dirEntry of Deno.readDirSync('./static/ncolesummers')) {
    if (dirEntry.isFile) {
      fileNames.push(dirEntry.name);
    }
  }
  fileNames.sort((a, b) => (a > b ? -1 : 1));

  const fileList = fileNames.map((file) => {

    return <li key ={file} >
      <img class={tw`shadow rounded`} src={`./ncolesummers/${file}`} alt="A graphic of a quote" />
    </li>
  });

  return (
    <div class={tw`p-4 container mx-auto max-w-screen-md`}>
      <h1 class={tw`my-1.5 font-sans font-semibold text-4xl text-center`}>Quotes</h1>
      <ul class={tw`grid grid-flow-dense shadow-sm gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5`}>{fileList}</ul>
    </div>
  );
}
