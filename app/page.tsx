import About from "@/components/About";
import Hero from "@/components/Hero";
import KeyStatistics from "@/components/KeyStatistics";
import { Navbar } from "@/components/ui/NavbarMenu";

export default function Home() {
  return (
    <main className="relative bg-gray-100 dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 antialiased">
      <div className="max-w-7xl w-full">
        <Navbar className="top-2" />
        <Hero />
        <KeyStatistics />
        <About />
      </div>
    </main>
  );
}
