import React from "react";
import { open_sans } from "@/ui/fonts";
import a from "@/lib/data";
import Form from "@/ui/componets/Form";
import Image from "next/image";
import Newbutton from "@/ui/componets/Newbutton";

const Page = () => {

  return (
    <main className="text-center">
      <h1 className={`text-center text-5xl ${open_sans}`}>Dashboard Page</h1>
      <h1>{a}</h1>
      <button className="btn">
        Click Me
      </button>
      <Newbutton/>
      <Form />
      <Image
        src="/assets/chip.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </main>
  );
};

export default Page;
