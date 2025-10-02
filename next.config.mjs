import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

// Export the final Next.js config with Nextra included
export default withNextra({
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: false,
      },
    ];
  },
});
