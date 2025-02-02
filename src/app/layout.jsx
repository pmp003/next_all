import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <header className="bg-teal-600 text-white p-4"><Link href={'/'}>My App</Link></header>
            <nav className="bg-teal-300">
              <ul className="">
                <Link href="/customers">
                  <li className="border-b border-black p-4">
                    Customers
                  </li>
                </Link>
                <Link href="/invoices">
                  <li className="border-b border-black p-4">
                    Invoices
                  </li>
                </Link>
                <Link href="/invoices/test">
                  <li className="border-b border-black px-8 py-4">
                    Invoices test
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
