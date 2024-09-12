import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { CommonLayout } from "./components/CommonLayout";

export const metadata: Metadata = {
  title: "Victor - Software Engineer",
  description: "Victor Rodrigues - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <head>
        <title>Victor Rodrigues</title>
        <link rel="icon" href="/victor.jpg" />
      </head>
      <body>
        <Providers>
          <CommonLayout>{children}</CommonLayout>
        </Providers>
      </body>
    </html>
  );
}
