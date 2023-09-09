import Image, { StaticImageData } from "next/image";

export default function Card({ props }: any) {
  return (
    <div>
      <Image src={props} alt={""} className="h-full"></Image>
    </div>
  );
}
