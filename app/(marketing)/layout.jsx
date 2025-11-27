import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Fixed Navbar */}
      <div className="relative mx-auto min-h-screen w-full pt-20">
        {/* ← THIS is the only fix */}
        <div className="fixed top-0 left-1/2 z-30 mt-5 w-full -translate-x-1/2">
          <header className="flex items-center justify-center">
            <Navbar />
          </header>
        </div>

        {/* Main Content */}
        <main className="mt-5 flex-1">{children}</main>

        {/* Centered Hello Section */}
        <section className="pointer-events-none absolute inset-0 mx-auto flex max-w-[1480px] items-center justify-center opacity-50 max-[1440px]:px-2">
          <div className="border-border bg-blue- h-full w-full border-x-[3px] border-dashed text-center"></div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
