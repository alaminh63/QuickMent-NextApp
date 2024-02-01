import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  w-full">
          <div className="md:w-1/6 ">
            <Sidebar />
          </div>
          <div className="md:w-5/6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
