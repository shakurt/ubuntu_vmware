import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Ubuntu VMware Installation",
  description:
    "A comprehensive guide to installing Ubuntu on VMware for educational purposes.",
  keywords: [
    "Ubuntu",
    "VMware",
    "virtual machine",
    "installation",
    "Linux",
    "operating systems",
    "virtualization",
    "tutorial",
    "guide",
  ],
  authors: [{ name: "ThePrimeShak" }],
  openGraph: {
    title: "Ubuntu VMware Installation Guide",
    description:
      "A comprehensive guide to installing Ubuntu on VMware for educational purposes.",
    type: "website",
    siteName: "Ubuntu Installation Docs",
  },
  robots: "index, follow",
};

const banner = (
  <Banner storageKey="welcome-banner">
    Welcome to the Ubuntu Installation Docs! 🧩
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>ThePrimeShak</b>}
    projectLink="https://github.com/shakurt/ubuntu_vmware"
    chatLink="https://discordapp.com/users/605522203580301312"
  />
);
const footer = (
  <Footer>
    © {new Date().getFullYear()} Ubuntu Installation Guide — Created by Shak
    for the Operating Systems Lab course.
  </Footer>
);

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
      <Head></Head>
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
          toc={{
            extraContent: null,
            backToTop: true,
            title: "Available sections on this page:",
          }}
          copyPageButton={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
