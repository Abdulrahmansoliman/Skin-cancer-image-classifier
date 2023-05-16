import Head from "next/head";

export default function Meta({
  title = "SkinGuard - Advanced Skin Cancer Detection",
  description = " SkinGuard is a state-of-the-art skin cancer detection service utilizing cutting-edge artificial intelligence technology. We provide accurate and early detection of skin cancer, offering peace of mind and proactive protection for your skin health. Discover our innovative solution today and safeguard your skin for a healthier future.",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.svg`}></meta> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@helmy162" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Head>
  );
}
