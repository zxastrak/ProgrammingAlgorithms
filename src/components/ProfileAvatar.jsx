import React from 'react'

function ProfileAvatar({ src, name, size = 'lg' }) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-36 h-36 text-4xl',
  }

  const initials = name
    ? name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
    : '?'

  return (
    <div className="relative flex items-center justify-center">
      <div className={`${sizeClasses[size]} rounded-full bg-[#222] border-2 border-white/10 overflow-hidden flex items-center justify-center`}>
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-bold text-green-400 font-mono">{initials}</span>
        )}
      </div>
    </div>
  )
}

export default ProfileAvatar
