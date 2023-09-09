import Image from "next/image";
import Galery from "./components/Content";
import Header from "./components/Header";
import lar from "../../public/lar-arquitetura.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="items-center justify-between">
      <Header />
      <div className="flex justify-center">
        <Image src={lar} alt={""} className="w-5/12"></Image>
      </div>
      <Galery />
      <Footer />
    </main>
  );
}
