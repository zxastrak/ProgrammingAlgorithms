import React from 'react'

function Badge({ children, variant = 'green', icon }) {
  const variants = {
    green: 'bg-green-500/15 text-green-400 border border-green-500/30',
    gray: 'bg-white/5 text-gray-400 border border-white/10',
    outline: 'bg-transparent text-green-400 border border-green-500/50',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${variants[variant]}`}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}

export default Badge
