
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen h-full  overflow-x-hidden md:p-4 sm:p-2 bg-[#fafafa]">
      <Header />
      <main className="mt-4">
        {children}
      </main>
    </div>
  )
}