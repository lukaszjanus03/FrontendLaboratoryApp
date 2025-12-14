import "./globals.css";
import ClientLayout from "@/app/components/ClientLayout";

export const metadata = {
  title: "Frontend Lab",
  description: "Aplikacja laboratoryjna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      {/* suppressHydrationWarning zapobiega błędom wtyczek przeglądarki */}
      <body className="bg-gray-50 text-slate-900 min-h-screen" suppressHydrationWarning={true}>
        <ClientLayout>
            {children}
        </ClientLayout>
      </body>
    </html>
  );
}