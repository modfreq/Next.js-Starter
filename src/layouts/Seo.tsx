import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

type seoTypes = {
  title: string;
  desc: string;
  canonical?: string;
};

const Seo = (props: seoTypes) => {
  const router = useRouter();

  const siteVars = {
    name: "Site name",
    title: props.title ? props.title : "Default site title",
    description: props.desc ? props.desc : "Default site description",
    locale: "en",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.desc}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.desc,
          url: props.canonical,
          locale: siteVars.locale,
          site_name: siteVars.name,
        }}
      />
    </>
  );
};

export { Seo };
