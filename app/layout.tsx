import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Nextra Documentation",
};

const banner = <Banner storageKey="some-new">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<b>ThePrimeShak</b>}
    projectLink="https://github.com/shakurt"
    chatLink="https://discordapp.com/users/605522203580301312"
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

const search = (
  <Search placeholder="Search docs..." emptyResult="No Result Found." />
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shakurt/ubuntu_vmware"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          toc={{ extraContent: null }}
          copyPageButton={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
