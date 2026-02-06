import { Navbar } from "@repo/ui/navbar";
import { Footer } from "@repo/ui/footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: 24 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
