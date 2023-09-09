import Image from "next/image";
import Card from "./Card";
import image1 from "../../../public/image-1.jpg";
import image2 from "../../../public/image-2.jpg";
import image3 from "../../../public/image-3.jpg";

export default function Galery() {
  return (
    <div className="grid xl:grid-cols-3 gap-12 lg:gap-6 bg-slate-200 py-24 px-32">
      <Card props={image1} />
      <Card props={image2} />
      <Card props={image3} />
    </div>
  );
}
