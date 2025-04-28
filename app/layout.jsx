import "@/assets/styles/globals.css";

export const metadata = {
  title: "TR Dev Blog",
  keywords: "Game Development, Blogging",
  description: "Gaming Dev blog for my current game development journey.",
  icons: {
    icon: "/favicon.jpg",
  },
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
