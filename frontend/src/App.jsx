import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import AreaSection from "./components/AreaSection";
import Gallery from "./components/Gallery";
import Certificates from "./components/Certificates";
import PromoVideos from "./components/PromoVideos";
import Notice from "./components/Notice";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <AreaSection />
        <Gallery />
        <Certificates />
        <PromoVideos />
        <Notice />
      </main>
      <Footer />
    </>
  );
}
