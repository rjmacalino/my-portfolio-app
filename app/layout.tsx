import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Raymond Macalino | Web & Game Developer",
  description:
    "Web & Game Developer based in Melbourne. I build things for the web, and sometimes for virtual worlds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
