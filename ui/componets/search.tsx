 'use client';
 import { useSearchParams,usePathname } from 'next/navigation';

 import React from 'react'
 
 const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const search =searchParams.get('search')
    
   return (
     <div>
<p> {pathname}</p>
<p> Search:{search}</p>

     </div>
   )
 }
 
 export default Search