"use client";
import { useEffect, useState } from "react";
import { lusitana } from "@/ui/fonts";
import Newforms from "@/ui/componets/Newforms";

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showContent ? (
        <>
          <p className={`text-center ${lusitana}`} style={{ fontSize: "48px" }}>
            Testing Page 

          </p>
          <Newforms />
        </>
      ) : (
        <div>
          <h1>Hang tight! hellooo</h1>
        </div>
      )}
    </main>
  );
}
