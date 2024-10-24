"use client";

import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const [mahasiswa, setJumlah] = useState(0);
  const [namaPacarSaya, setNama] = useState("");

  useEffect(() => {
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="#">Why do I have this issue?</a>'
    // });
    if (mahasiswa > 1) {
      setNama("RORIA");
    }else if (mahasiswa < 1){
      setNama("tidak ada");
    }
  }, [mahasiswa]);

  return (
    <div className="p-10 bg-white">
      <h1 className="text-black">nama pacar saya :{namaPacarSaya}</h1>
      <p className="mb-4 text-xl font-bold text-black">
        jumlah mahasiswa saat ini {mahasiswa}
      </p>
      <button
        className="p-2 mx-4 bg-orange-500 border border-b-4 border-black rounded-lg hover:scale-95 hover:bg-orange-60"
        onClick={() => setJumlah((nilaiAkhir) => nilaiAkhir + 1)}
      >
        tambah
      </button>
      <button
        className="p-2 bg-orange-500 border border-b-4 border-black rounded-lg hover:scale-95 hover:bg-orange-600"
        onClick={() => setJumlah((nilaiAkhir) => nilaiAkhir - 1)}
      >
        kurangi
      </button>
    </div>
  );
}
