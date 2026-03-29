import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProfileAvatar from '../components/ProfileAvatar'
import InfoCard from '../components/InfoCard'
import Badge from '../components/Badge'
import SectionDivider from '../components/SectionDivider'

const profileData = {
  namaLengkap: 'Mochamad Miftahul Huda',
  kelas: 'TII-A 2023',
  jurusan: 'Information Technology',
  domisili: 'Kediri, East Java',
  fotoProfil: '/fotoku.jpeg',
  tentangDiri: `Hi! My name is Mochamad Miftahul Huda, but you can call me Huda or Idam. Since I was a kid, I've always been into computers. I started off playing GameHouse games, online games, and eventually got into making videos. Back in 3rd grade, I even created my own YouTube channel where I uploaded Minecraft gameplay. That's where my interest in editing began. Around 2018–2020, I got really into editing "jedag jedug" style videos and joined a community called "Editor Berkelas."

As I moved into high school, I still enjoyed editing and even joined a graphic design extracurricular. But over time, editing started to feel tiring, and I slowly lost interest. That's when I began exploring other things related to computers — something more challenging and exciting.

Now in college, I've found a new passion: coding. I'm especially interested in cybersecurity because it feels like a cool and important field, and honestly, it seems a bit safer from AI taking over (haha). Besides that, I'm also interested in IoT (Internet of Things) because I think robotics and smart devices are really cool and have a lot of potential in the future. I'm excited to keep learning and growing in these areas, and hopefully build a strong future in tech.`,
  skills: ['ReactJS', 'JavaScript', 'TailwindCSS', 'Git & GitHub', 'HTML/CSS'],
  hobi: ['Running', 'Gaming'],
  github: 'zxastrak',
}

function NamaAnda() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(12)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${(i + 1) * 8}%`} x2="100%" y2={`${(i + 1) * 8}%`} stroke="#22c55e" strokeWidth="0.5" />
          ))}
          {[...Array(16)].map((_, i) => (
            <line key={`v${i}`} x1={`${(i + 1) * 6.25}%`} y1="0" x2={`${(i + 1) * 6.25}%`} y2="100%" stroke="#22c55e" strokeWidth="0.5" />
          ))}
          <line x1="0" y1="0" x2="40%" y2="100%" stroke="#22c55e" strokeWidth="0.8" />
          <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#22c55e" strokeWidth="0.8" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#22c55e" strokeWidth="0.4" />
          <polygon points="0,0 120,0 0,120" fill="#22c55e" fillOpacity="0.06" />
          <polygon points="100%,100% calc(100% - 120px),100% 100%,calc(100% - 120px)" fill="#22c55e" fillOpacity="0.06" />
          <polygon points="85%,5% 92%,9% 92%,17% 85%,21% 78%,17% 78%,9%" fill="none" stroke="#22c55e" strokeWidth="0.8" />
        </svg>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          <div className={`lg:col-span-2 bg-[#161616] border border-white/8 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ProfileAvatar src={profileData.fotoProfil} name={profileData.namaLengkap} size="lg" />

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-white">{profileData.namaLengkap}</h2>
              <p className="text-green-400 text-sm font-mono mt-1">{profileData.jurusan}</p>
            </div>

            <SectionDivider />

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profileData.domisili}
            </div>

            <SectionDivider />

            <div className="w-full">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-3 text-left">Skills</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {profileData.skills.map((skill) => (
                  <Badge key={skill} variant="green">{skill}</Badge>
                ))}
              </div>
            </div>

            <SectionDivider />

            <div className="w-full">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-3 text-left">Hobbies</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {profileData.hobi.map((h) => (
                  <Badge key={h} variant="outline">{h}</Badge>
                ))}
              </div>
            </div>

            <SectionDivider />

            <div className="w-full">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-3 text-left">Social Media</p>
              <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {profileData.github}
              </a>
            </div>
          </div>

          <div className={`lg:col-span-3 flex flex-col gap-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

            <div className="bg-[#161616] border border-white/8 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Bio & Other Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <InfoCard label="Full Name" value={profileData.namaLengkap} />
                <InfoCard label="Class" value={profileData.kelas} />
                <InfoCard label="Major / Study Program" value={profileData.jurusan} />
                <InfoCard label="Domicile" value={profileData.domisili} />
              </div>
              <SectionDivider />
              <div className="flex flex-wrap gap-3">
                <Badge variant="green" icon="●">Active Student</Badge>
                <Badge variant="green" icon="🎓">Universitas Brawijaya</Badge>
                <Badge variant="green" icon="⚡">PROVOKS</Badge>
              </div>
            </div>

            <div className={`bg-[#161616] border border-white/8 rounded-2xl p-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full bg-green-500" />
                <h3 className="text-lg font-semibold text-white">About Me</h3>
              </div>
              <div className="space-y-4">
                {profileData.tentangDiri.split('\n\n').filter((p) => p.trim()).map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed text-sm">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} {profileData.namaLengkap} · Universitas Brawijaya
          </p>
        </div>
      </main>
    </div>
  )
}

export default NamaAnda
