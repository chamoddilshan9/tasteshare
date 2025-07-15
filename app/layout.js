import Footer from "@/components/footer/footer";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
