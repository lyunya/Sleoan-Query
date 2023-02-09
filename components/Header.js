import Image from "next/image";

const Header = () => {
  return (
    <header href="/" className="w-fit mx-auto my-4 flex">
      <Image src="/hamster.gif" alt="dancing hamster" width={48} height={48} />
      <h1 className="text-5xl text-white text-center">Sleoan Query</h1>
      <Image src="/hamster.gif" alt="dancing hamster" width={48} height={48} />
    </header>
  );
}

export default Header
