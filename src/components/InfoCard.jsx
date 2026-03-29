import React from 'react'

function InfoCard({ label, value, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
        {label}
      </span>
      <span className="text-white font-semibold text-base leading-snug">
        {value}
      </span>
    </div>
  )
}

export default InfoCard
