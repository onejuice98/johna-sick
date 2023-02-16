import "@/app/styles/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title> Next.js 13 </title>
        <script
          src="https://kit.fontawesome.com/72c5ecbf7c.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <header> header </header>
        <div>{children}</div>
        <footer>footer</footer>
      </body>
    </html>
  );
}
