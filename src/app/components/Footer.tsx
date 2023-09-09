import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex bg-gray-300 py-4w-full justify-center 
      flex-col font-bold tracking-wide p-6 xl:px-32 xl:py-14 xl:text-xl"
    >
      <ul className="flex flex-wrap  leading-5">
        <li className="mr-3 ml-3 mb-2">
          <Link target="_blank" href="https://github.com/liondexx">
            Github
          </Link>
        </li>

        <li className="mr-3 mb-2">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/lion-patrocino-96b808229/"
          >
            Linkedin
          </Link>
        </li>
      </ul>
      <p>©By 2023 Lion Patrocinio Cunha Costa</p>
    </footer>
  );
}
