import React from 'react';
import profilePic from '../assets/ocha.jpeg'; 

const OchaNovelinoSukina = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 md:p-12">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Foto Profil Ocha"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-md"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Ocha Novelino Sukina</h1>
            <div className="text-lg text-gray-600 space-y-2 mt-4">
              <p><span className="font-bold text-gray-700">Kelas:</span> T2A</p>
              <p><span className="font-bold text-gray-700">Jurusan/Prodi:</span> Teknologi Informasi</p>
              <p><span className="font-bold text-gray-700">Domisili:</span> Bogor, Cileungsi</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-600 pb-2 inline-block">
            Tentang Diri
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Hi everyone! Perkenalkan nama saya Ocha Novelino Sukina. Saya lahir di Klaten dan dibesarkan di Bogor. Saat ini aku sedang menyelesaikan perkuliahan saya di Universitas Brawijaya. Saya memiliki hobi seperti design digital dan gambar manual. Sejak awal perkuliahan, saya mulai tertarik pada bidang seperti pemrograman, pengembangan web, hingga konsep-konsep modern seperti blockchain dan sistem berbasis API. Ketertarikan ini membuat saya terus belajar secara mandiri, mencoba berbagai tools seperti Git, serta memahami alur kerja kolaborasi dalam pengembangan proyek. Selain itu, saya juga menyukai proses berpikir logis dan analitis, terutama ketika menyelesaikan masalah yang menantang. Di luar akademik, saya memiliki hobi mengeksplorasi hal-hal baru, baik itu belajar teknologi terbaru, mengembangkan ide proyek, maupun berdiskusi dengan teman tentang inovasi digital. Saya juga terbiasa bekerja dalam tim, baik dalam tugas kelompok maupun proyek kolaboratif, yang membantu saya mengasah kemampuan komunikasi dan kerja sama. Ke depan, saya memiliki impian untuk menjadi seorang profesional di bidang teknologi, khususnya dalam pengembangan sistem yang bermanfaat bagi banyak orang. Saya ingin menciptakan solusi digital yang tidak hanya inovatif, tetapi juga berdampak nyata bagi masyarakat. Dengan semangat belajar yang tinggi dan konsistensi, saya yakin dapat terus berkembang dan mencapai tujuan tersebut.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OchaNovelinoSukina;