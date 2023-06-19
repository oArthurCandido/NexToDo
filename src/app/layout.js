import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/lib/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexToDo",
  description: "Uma To Do list para te ajudar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={` dark:bg-black dark:text-white max-w-lg m-auto px-2 ${inter.className}`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
