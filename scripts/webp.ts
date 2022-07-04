
for (const dirEntry of Deno.readDirSync("../static/ncolesummers")) {
    const webpOut = (dirEntry.name.endsWith(".jpg")) ? dirEntry.name.replace(".jpg", ".webp") : dirEntry.name;
    console.log(dirEntry.name, webpOut);
    const cmd = ["cwebp", "-q", "75", `../static/ncolesummers/${dirEntry.name}`, "-o", `../static/ncolesummers/${webpOut}`];
    const p = Deno.run({ cmd, stdout: "piped", stderr: "piped" });
    const { code } = await p.status();
    console.log(code);
}