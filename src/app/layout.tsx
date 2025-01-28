import "./globals.css";
import Header from "@/components/layout/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main style={{ background: "#F1F3F7", width: "100%", height: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
