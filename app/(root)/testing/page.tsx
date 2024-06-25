'use client';
import { useEffect, useState } from "react";
import { lusitana } from "@/ui/fonts";
import Search from "./search";

export default  function async  Page() {
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
                    <p className={`text-center ${lusitana}`} style={{ fontSize: '48px' }}>Testing Page</p>
                    <Search />
                </>
            ) : (
                <p className="text-center" style={{ fontSize: '48px' }}>Loading...</p>
            )}
        </main>
    );
}
