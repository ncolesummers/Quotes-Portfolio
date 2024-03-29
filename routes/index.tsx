/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
import { Container } from "../components/container.tsx";

export default function Home() {
  const fileNames: string[] = [
    "2022-06-14_01-55-33_UTC.webp",
    "2022-06-09_03-08-06_UTC.webp",
    "2022-06-08_03-13-47_UTC.webp",
    "2022-06-07_04-45-42_UTC.webp",
    "2022-06-06_03-17-13_UTC.webp",
    "2022-06-05_04-16-01_UTC.webp",
    "2022-06-04_02-32-37_UTC.webp",
    "2022-05-30_18-34-52_UTC.webp",
    "2022-05-29_20-01-35_UTC.webp",
    "2022-05-27_03-07-19_UTC.webp",
    "2022-05-25_04-20-14_UTC.webp",
    "2022-05-22_03-35-16_UTC.webp",
    "2022-05-18_04-19-28_UTC.webp",
    "2022-05-12_03-42-08_UTC.webp",
    "2022-05-08_18-13-42_UTC.webp",
    "2022-05-01_04-07-22_UTC.webp",
    "2022-04-30_05-31-59_UTC.webp",
    "2022-04-24_04-53-34_UTC.webp",
    "2022-04-16_23-26-04_UTC.webp",
    "2022-04-15_21-17-24_UTC.webp",
    "2022-03-31_01-01-34_UTC.webp",
    "2022-03-26_01-08-12_UTC.webp",
    "2022-03-23_20-39-20_UTC.webp",
    "2022-03-19_05-20-41_UTC.webp",
    "2022-03-17_22-00-09_UTC.webp",
    "2022-03-16_20-16-34_UTC.webp",
    "2022-03-09_23-02-58_UTC.webp",
    "2022-02-24_20-35-09_UTC.webp",
    "2022-02-16_09-26-52_UTC.webp",
    "2022-01-06_20-06-17_UTC.webp",
    "2021-12-30_22-25-55_UTC.webp",
    "2021-12-29_19-12-36_UTC.webp",
    "2021-12-22_01-39-56_UTC.webp",
    "2021-12-15_23-19-14_UTC.webp",
    "2021-12-14_19-43-56_UTC.webp",
    "2021-12-04_21-21-54_UTC.webp",
    "2021-12-02_06-17-09_UTC.webp",
    "2021-11-28_15-52-03_UTC.webp",
    "2021-09-17_18-52-11_UTC.webp",
    "2021-09-11_03-48-07_UTC.webp",
    "2021-09-08_01-45-00_UTC.webp",
    "2021-09-07_00-12-44_UTC.webp",
    "2021-09-04_00-51-46_UTC.webp",
    "2021-09-01_04-45-07_UTC.webp",
    "2021-08-31_04-26-29_UTC.webp",
    "2021-08-30_00-21-43_UTC.webp",
    "2021-08-29_02-52-36_UTC.webp",
    "2021-08-27_01-16-39_UTC.webp",
    "2021-08-25_02-24-04_UTC.webp",
    "2021-08-17_21-44-26_UTC.webp",
    "2021-08-15_03-37-08_UTC.webp",
    "2021-08-13_20-38-27_UTC.webp",
    "2021-08-12_22-25-28_UTC.webp",
    "2021-08-10_04-09-37_UTC.webp",
    "2021-08-09_05-22-26_UTC.webp",
    "2021-08-05_21-24-37_UTC.webp",
    "2021-08-03_20-51-11_UTC.webp",
    "2021-08-02_20-44-44_UTC.webp",
    "2021-08-01_23-42-35_UTC.webp",
    "2021-07-31_04-28-53_UTC.webp",
    "2021-07-30_03-38-40_UTC.webp",
    "2021-07-29_01-19-24_UTC.webp",
    "2021-07-27_01-51-25_UTC.webp",
    "2021-07-26_01-59-29_UTC.webp",
    "2021-07-23_22-32-05_UTC.webp",
    "2021-07-22_22-03-37_UTC.webp",
    "2021-07-21_19-28-59_UTC.webp",
    "2021-07-20_20-48-39_UTC.webp",
    "2021-07-20_01-34-55_UTC.webp",
    "2021-07-14_18-46-58_UTC.webp",
    "2021-07-13_22-14-55_UTC.webp",
    "2021-07-12_20-42-52_UTC.webp",
    "2021-07-11_00-22-09_UTC.webp",
    "2021-07-08_19-20-22_UTC.webp",
    "2021-07-07_20-47-47_UTC.webp",
    "2021-07-06_20-49-58_UTC.webp",
    "2021-07-06_05-38-48_UTC.webp",
    "2021-07-01_20-14-35_UTC.webp",
    "2021-06-30_21-06-45_UTC.webp",
    "2021-06-25_20-38-13_UTC.webp",
    "2021-06-24_21-23-45_UTC.webp",
    "2021-06-22_01-54-18_UTC.webp",
    "2021-06-03_01-44-15_UTC.webp",
    "2021-01-21_19-11-04_UTC.webp",
    "2021-01-15_18-59-09_UTC.webp",
    "2020-10-22_22-28-45_UTC.webp",
    "2020-09-07_05-04-54_UTC.webp",
    "2020-08-22_01-09-58_UTC.webp",
    "2020-08-19_03-28-36_UTC.webp",
    "2020-08-15_20-54-56_UTC.webp",
    "2020-08-12_21-13-45_UTC.webp",
    "2020-08-12_00-15-32_UTC.webp",
    "2020-08-11_00-32-31_UTC.webp",
    "2020-08-07_23-54-30_UTC.webp",
    "2020-08-06_18-14-04_UTC.webp",
    "2020-08-06_01-41-26_UTC.webp",
    "2020-08-04_02-04-15_UTC.webp",
    "2020-07-30_18-32-18_UTC.webp",
    "2020-07-29_23-04-24_UTC.webp",
    "2020-07-27_19-20-59_UTC.webp",
    "2020-07-20_20-34-11_UTC.webp",
    "2020-07-16_20-25-53_UTC.webp",
    "2020-07-15_01-03-02_UTC.webp",
    "2020-07-10_17-48-55_UTC.webp",
    "2020-07-09_19-47-19_UTC.webp",
    "2020-07-09_06-49-15_UTC.webp",
    "2020-07-07_19-16-01_UTC.webp",
    "2020-07-05_20-38-58_UTC.webp",
    "2020-07-02_19-23-59_UTC.webp",
    "2020-07-01_18-41-14_UTC.webp",
    "2020-06-30_18-11-34_UTC.webp",
    "2020-06-29_19-00-04_UTC.webp",
    "2020-06-28_17-06-10_UTC.webp",
    "2020-06-28_03-19-22_UTC.webp",
    "2020-04-20_20-15-37_UTC.webp",
    "2020-03-13_18-34-20_UTC.webp",
    "2020-03-11_18-49-06_UTC.webp",
    "2020-03-10_19-22-52_UTC.webp",
    "2020-03-05_20-05-12_UTC.webp",
    "2020-03-04_19-21-04_UTC.webp",
    "2020-03-03_18-54-56_UTC.webp",
    "2020-03-02_19-50-09_UTC.webp",
    "2020-02-29_21-47-55_UTC.webp",
    "2020-02-28_19-08-57_UTC.webp",
    "2020-02-27_19-23-26_UTC.webp",
    "2020-02-26_17-57-01_UTC.webp",
    "2020-02-24_20-27-06_UTC.webp",
    "2020-02-21_18-53-23_UTC.webp",
    "2020-02-20_20-08-19_UTC.webp",
    "2020-02-19_19-42-01_UTC.webp",
    "2020-02-18_18-26-45_UTC.webp",
    "2020-02-17_19-12-38_UTC.webp",
    "2020-02-13_20-34-14_UTC.webp",
    "2020-02-12_19-50-59_UTC.webp",
    "2020-02-06_23-34-33_UTC.webp",
    "2020-02-03_19-25-56_UTC.webp",
    "2020-02-01_21-51-47_UTC.webp",
    "2020-01-31_19-52-46_UTC.webp",
    "2020-01-30_19-30-37_UTC.webp",
    "2020-01-29_21-45-16_UTC.webp",
    "2020-01-23_18-32-08_UTC.webp",
    "2020-01-21_18-42-37_UTC.webp",
    "2020-01-20_20-53-02_UTC.webp",
    "2020-01-17_22-34-02_UTC.webp",
    "2020-01-16_22-04-48_UTC.webp",
    "2020-01-13_21-25-49_UTC.webp",
    "2020-01-10_18-28-02_UTC.webp",
    "2020-01-08_18-44-22_UTC.webp",
    "2020-01-06_18-44-46_UTC.webp",
    "2020-01-05_21-55-56_UTC.webp",
    "2020-01-03_19-02-56_UTC.webp",
  ];

  let eager = 0;
  const dimension = "1080";

  const meta = {
    canonical: "http://quotes.ncolesummers.com",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "preact,fresh,quotes,meta,document,html,tags",
      },
    },
  }

  return (
    <Container {...meta}>
    <div class={tw`p-4 container mx-auto max-w-screen-md`}>
      <h1 class={tw`my-1.5 font-sans font-semibold text-4xl text-center`}>
        Quotes
      </h1>
      <ul
        class={tw
          `grid grid-flow-dense gap-3 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
      >
        {fileNames.map((file) => {
          return <li class={tw` shadow-sm transition ease-in-out delay-100 hover:scale-125 hover:z-40 focus:ring-2 hover:shadow-2xl`} key ={file} >
            {eager++ < 8
            ? <img width={dimension} height={dimension} class={tw`shadow rounded`} src={asset(`./ncolesummers/${file}`)}
              alt="A graphic of a quote" />
            : <img loading="lazy" width={dimension} height={dimension} class={tw`shadow rounded`} src={asset(`./ncolesummers/${file}`)} alt="A graphic of a quote" />
          }
            
          </li>
        })}
      </ul>
    </div>
    </Container>
  );
}
