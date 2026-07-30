import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

const Divider = () => (
  <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(0,212,255,.12),transparent)" }} />
);

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Divider /><About />
        <Divider /><Experience />
        <Divider /><Projects />
        <Divider /><Skills />
        <Divider /><Credentials />
        <Divider /><Contact />
      </main>
      <Footer />
    </>
  );
}
