import Image from "next/image";

import Button from "@/ui/componets/Button";
import Names from "@/ui/componets/Names";
export default function Home() {
  return (
    <div className=" text-center text-5xl">
      <h1> Home Page</h1>
      <h2> Next JS we are coming </h2>
      <p> This is the home page of the project</p>
  
      <Button />
      <Names name="John" />
      <Image
        src="/laptop.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Image
        className="  align-middle"
        src="/assets/jsts.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
