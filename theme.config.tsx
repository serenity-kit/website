import { DocsThemeConfig } from "nextra-theme-docs";
import { Code } from "./components/Code";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { P } from "./components/P";
import { Pre } from "./components/Pre";
import { Table } from "./components/Table";
import { Td } from "./components/Td";
import { Th } from "./components/Th";
import { Tr } from "./components/Tr";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Serenity</title>
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={"End-to-end encrypted workspaces"} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Serenity" />
      <meta
        property="og:description"
        content={"End-to-end encrypted workspaces"}
      />
      <meta property="og:site_name" content="Serenity" />
      <meta property="og:image:width" content="1755" />
      <meta property="og:image:height" content="919" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@serenity_notes_" />
      <meta
        name="twitter:title"
        content="Serenity: end-to-end encrypted workspaces"
      />
      <meta
        name="twitter:description"
        content="End-to-end encrypted workspaces."
      />
    </>
  ),
  logo: (
    // wrapper needed so it looks vertically centered in header
    <div style={{ marginBottom: 0 }}>
      <Logo width={117} height={32.25} />
    </div>
  ),
  docsRepositoryBase: "https://github.com/serenity-kit/website",
  footer: {
    component: Footer,
  },
  search: {
    placeholder: "Search …",
  },
  primaryHue: 232,
  components: {
    // https://mdxjs.com/table-of-components/
    pre: Pre,
    code: Code,
    p: (props) => <P className="max-w-3xl nx-mt-5 first:nx-mt-0" {...props} />,
    table: Table,
    th: Th,
    tr: Tr,
    td: Td,
  },
};

export default config;
