import React from "react";
import Search from "../../../ui/componets/search";
import { open_sans } from "@/ui/fonts";
import a from "@/lib/data";
import Form from "@/ui/componets/Form";
import Image from "next/image";
const page = () => {
  return (
    <main className="text-center">
      <h1 className={`text-center text-5xl ${open_sans}`}> Dashboard Page </h1>
      <Search />
      <h1> {a} </h1>
      <button className="btn"> click me</button>
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

export default page;
