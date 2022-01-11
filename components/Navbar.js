import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      {/* <div className="logo">
        <Image src="/landing.png" width={105} height={100} />
      </div> */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">
        <a>Blog Listing</a>
      </Link>

      <Link href="/about">
        <a>Team</a>
      </Link>
      <Link href="/about">
        <a>Get in touch</a>
      </Link>
    </nav>
  );
};

export default Navbar;
