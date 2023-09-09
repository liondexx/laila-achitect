import MenuDrop from "./MenuDrop";
import lar from "../../../public/lar.svg";
import insta from "../../../public/insta.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white flex justify-between px-4 py-5">
      <MenuDrop />
      <Image src={lar} alt={""} className="w-20 sm:w-32 "></Image>
      <Link
        href="https://instagram.com/lailaarquitetura?igshid=MzRlODBiNWFlZA=="
        className="w-10 sm:w-16"
      >
        <Image src={insta} alt={""} className="w-10 sm:w-16"></Image>
      </Link>
    </div>
  );
}
