import foto from "../assets/fauzanSma.jpg";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

export default function Fauzan() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER / COVER */}
      <div className="h-56 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

      {/* PROFILE SECTION */}
      <div className="max-w-4xl mx-auto px-6">

        {/* FOTO + NAMA */}
        <div className="relative -mt-20 mb-6">
          <img
            src={foto}
            className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <div className="mt-4">
            <h1 className="text-3xl font-bold">Fauzan</h1>
            <p className="text-gray-600">
              Mahasiswa D3 Teknologi Informasi | Future Developer
            </p>
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
          
          <div className="flex items-center gap-2">
            <FaUniversity />
            <span>Universitas Brawijaya</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Purworejo, Indonesia</span>
          </div>

        </div>

        {/* ABOUT */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
Perkenalkan, saya Fauzan, mahasiswa program studi D3 Teknologi Informasi di Universitas Brawijaya. Perjalanan saya mengenal teknologi berawal cukup sederhana. Saat kelas 4 SD, saya baru mulai memegang smartphone yang kala itu masih didominasi oleh game offline, dan itupun hanya untuk bermain dalam waktu yang singkat. Penggunaan teknologi mulai terasa lebih intens ketika saya masuk SMP. Di masa itulah saya pertama kali menggunakan laptop untuk mengerjakan tugas sekolah, walau hasilnya masih sangat sederhana. Rasa penasaran dan ketertarikan untuk benar-benar mengulik dunia teknologi baru tumbuh pesat saat saya duduk di bangku SMA.

Ketertarikan tersebutlah yang meyakinkan saya untuk memilih jurusan ini. Saya menyadari bahwa teknologi akan terus berkembang di setiap masa, dan saya ingin mengambil andil di dalamnya. Selain itu, prospek kerja IT yang sangat luas memberikan saya ruang untuk mengeksplorasi di mana sebenarnya minat spesifik saya berada. Memasuki semester dua ini, sejujurnya saya menghadapi tantangan yang cukup berat. Saya sering merasa tertinggal, bingung, dan bahkan sempat merasa kurang cocok karena berhadapan dengan coding tingkat lanjut serta banyaknya materi baru yang belum sepenuhnya saya pahami.

Meskipun proses perkuliahan saat ini terasa berat, komitmen saya tetap sama. Saya adalah individu yang senang belajar hal baru, gigih mengembangkan skill, dan terus mencoba meningkatkan kemampuan diri setiap harinya. Saya memiliki ketertarikan yang kuat dalam dunia digital dan tetap memegang teguh impian untuk menjadi seorang developer yang mampu memberikan solusi bermanfaat di masa depan. Tantangan dan kebingungan saat ini adalah bagian dari proses belajar saya untuk terus bertumbuh dan menjadi lebih baik.
          </p>
        </div>

      </div>
    </div>
  );
}