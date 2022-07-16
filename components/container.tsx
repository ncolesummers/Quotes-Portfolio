
/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Container = ({ children, ...customMeta }: Props) => {
  return (
    <>
      <main style={{ minHeight: "100vh" }}>
        <Seo {...customMeta} />
        <div className="container">{children}</div>
      </main>
    </>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: "Quote Graphics by N.Cole Summers",
    description: "Graphics with Quotes pulled from popular literature.",
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
