import Header from "@/components/header/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>
    </>
  );
} 