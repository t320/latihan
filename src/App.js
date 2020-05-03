import React, { useState } from "react";
export default function App() {
  let nama = "Budi";
  //let total = 0;

  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("proses");
  const [tinggiPersegi, setTinggiPersegi] = useState(100);
  const [lampuHidup, setLampuHidup] = useState(false);

  function penjumlahan(mynumber) {
    // conscol.log ('sudah diklik')

    setTotal(total + mynumber);
  }

  function ubahStatus() {
    setStatus("selesai");
  }

  return (
    <>
      <h1 style={{ color: "blue" }}>Halo {nama}</h1>
      <h1 style={{ color: "red" }}>Jumlah nya {total}</h1>
      <h1>status: {status}</h1>
      <div
        style={{
          width: 100,
          height: tinggiPersegi,
          borderRadius: 50,
          background: lampuHidup ? "#4679f0" : "lightray"
        }}
      />
      <button onClick={() => setLampuHidup(!lampuHidup)}>
        {lampuHidup ? "Matiin" : "nyalain"} lampu
      </button>
      <button onClick={() => penjumlahan(2)}>Tambah</button>
      <button onClick={ubahStatus}>Selesai</button>
      <button onClick={() => setTinggiPersegi(200)}>
        Jadi Persegi Panjang
      </button>
      <button onClick={() => setLampuHidup(true)}>nyalain lampu</button>
      <button onClick={() => setLampuHidup(false)}>matiin lampu</button>
    </>
  );
}
