import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
