// The below script converts all images to webp format

for (const dirEntry of Deno.readDirSync("../static/ncolesummers")) {
  if (dirEntry.name.endsWith(".webp")) {
    continue;
  } else {
    const webpOut = dirEntry.name.replace(".jpg", ".webp");
    console.log(dirEntry.name, webpOut);
    const cmd = ["cwebp", "-q", "100", `../static/ncolesummers/${dirEntry.name}`, "-o", `../static/ncolesummers/${webpOut}`];
    const p = Deno.run({ cmd, stdout: "piped", stderr: "piped" });
    const { code } = await p.status();
    console.log(code);
    Deno.removeSync(`../static/ncolesummers/${dirEntry.name}`);
  }
}