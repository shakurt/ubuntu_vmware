import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: false,
});

export default withNextra({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/intro",
        permanent: true,
      },
    ];
  },
});
