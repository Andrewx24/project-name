import Image from "next/image";
import Search from "../testing/search";
import Button from "@/ui/componets/Button";

export default function Home() {
  return (
    <div className=" text-center text-5xl">

      <h1> Home Page</h1>
      <h2> Next JS we are coming </h2>
      <p> This is the home page of the project</p>
      <Search/>
      <Button />
      <Image
      src="/laptop.png"
      alt="Picture of the author"
      width={500}
      height={500}
      />
    </div>
  );
}
