import React from "react";

interface isi {
  id: string;
  tittle: string;
  author: string;
  date: string;
}

const Page = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const isi = await data.json();

  return;
  <div>    
    <ul>
  {isi.map((isis : any) => (
    <li key={isis.id}>{isis.title}</li>
  ))}
</ul>
  </div>;
};

export default Page;
