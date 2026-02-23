import React from 'react'

export default function StudyBackground() {
  return (
    <div className="study-bg" aria-hidden="true">

      {/* ── BOOK top-left ── */}
      <svg className="sbg-icon sbg-book1" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="0" width="66" height="90" rx="5" fill="#6366f1"/>
        <rect x="14" y="6" width="54" height="78" rx="3" fill="#a5b4fc"/>
        <rect x="8" y="0" width="12" height="90" rx="3" fill="#4f46e5"/>
        <line x1="28" y1="25" x2="60" y2="25" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="28" y1="38" x2="60" y2="38" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="28" y1="51" x2="50" y2="51" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="28" y1="64" x2="55" y2="64" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>

      {/* ── PENCIL top-center ── */}
      <svg className="sbg-icon sbg-pencil1" viewBox="0 0 30 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="0" width="26" height="90" rx="4" fill="#f59e0b"/>
        <rect x="2" y="82" width="26" height="18" rx="2" fill="#fde68a"/>
        <polygon points="2,100 28,100 15,120" fill="#1e1b4b"/>
        <rect x="2" y="0" width="26" height="14" rx="4" fill="#9ca3af"/>
        <rect x="4" y="14" width="22" height="6" fill="#f87171"/>
        <line x1="15" y1="20" x2="15" y2="98" stroke="rgba(255,255,255,0.35)" strokeWidth="3"/>
      </svg>

      {/* ── ATOM top-right ── */}
      <svg className="sbg-icon sbg-atom1" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="12" fill="#06b6d4"/>
        <ellipse cx="60" cy="60" rx="55" ry="22" fill="none" stroke="#06b6d4" strokeWidth="4"/>
        <ellipse cx="60" cy="60" rx="55" ry="22" fill="none" stroke="#06b6d4" strokeWidth="4" transform="rotate(60 60 60)"/>
        <ellipse cx="60" cy="60" rx="55" ry="22" fill="none" stroke="#06b6d4" strokeWidth="4" transform="rotate(120 60 60)"/>
        <circle cx="60" cy="8"  r="7" fill="#67e8f9"/>
        <circle cx="108" cy="74" r="7" fill="#67e8f9"/>
        <circle cx="12" cy="74" r="7" fill="#67e8f9"/>
      </svg>

      {/* ── GRAD CAP right ── */}
      <svg className="sbg-icon sbg-cap1" viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="65,8 130,38 65,68 0,38" fill="#6366f1"/>
        <ellipse cx="65" cy="64" rx="38" ry="22" fill="#4f46e5"/>
        <rect x="108" y="34" width="8" height="42" rx="4" fill="#6366f1"/>
        <circle cx="112" cy="80" r="12" fill="#f59e0b"/>
        <line x1="65" y1="8" x2="65" y2="68" stroke="#818cf8" strokeWidth="2" strokeDasharray="4"/>
      </svg>

      {/* ── OPEN BOOK center-bottom ── */}
      <svg className="sbg-icon sbg-openbook" viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
        <path d="M80,15 Q55,8 10,14 L10,95 Q55,88 80,95 Z" fill="#818cf8"/>
        <path d="M80,15 Q105,8 150,14 L150,95 Q105,88 80,95 Z" fill="#6366f1"/>
        <rect x="76" y="12" width="8" height="85" rx="4" fill="#4f46e5"/>
        <line x1="22" y1="32" x2="72" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="22" y1="45" x2="72" y2="41" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="22" y1="58" x2="72" y2="54" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="22" y1="71" x2="60" y2="67" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="88" y1="28" x2="138" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="88" y1="41" x2="138" y2="45" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="88" y1="54" x2="138" y2="58" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="100" y1="67" x2="138" y2="71" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {/* ── FLASK left-bottom ── */}
      <svg className="sbg-icon sbg-flask1" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="36" y="0"  width="28" height="45" rx="4" fill="#818cf8"/>
        <path d="M20,45 L36,45 L36,80 Q50,115 64,80 L64,45 L80,45 L80,42 L20,42 Z" fill="#6366f1"/>
        <path d="M30,85 Q50,120 70,85" fill="#a5b4fc" opacity="0.5"/>
        <circle cx="42" cy="92" r="7"  fill="#c7d2fe" opacity="0.9"/>
        <circle cx="58" cy="80" r="5"  fill="#c7d2fe" opacity="0.9"/>
        <circle cx="50" cy="102" r="4" fill="#c7d2fe" opacity="0.9"/>
        <line x1="20" y1="42" x2="80" y2="42" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round"/>
      </svg>

      {/* ── RULER right-bottom ── */}
      <svg className="sbg-icon sbg-ruler1" viewBox="0 0 30 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="30" height="160" rx="5" fill="#10b981"/>
        <line x1="15" y1="14"  x2="30" y2="14"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="28"  x2="30" y2="28"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="42"  x2="30" y2="42"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="56"  x2="30" y2="56"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="70"  x2="30" y2="70"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="84"  x2="30" y2="84"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="98"  x2="30" y2="98"  stroke="white" strokeWidth="2"/>
        <line x1="15" y1="112" x2="30" y2="112" stroke="white" strokeWidth="2"/>
        <line x1="15" y1="126" x2="30" y2="126" stroke="white" strokeWidth="2"/>
        <line x1="15" y1="140" x2="30" y2="140" stroke="white" strokeWidth="2"/>
        <line x1="0"  y1="21"  x2="14" y2="21"  stroke="white" strokeWidth="1.5"/>
        <line x1="0"  y1="35"  x2="14" y2="35"  stroke="white" strokeWidth="1.5"/>
        <line x1="0"  y1="49"  x2="14" y2="49"  stroke="white" strokeWidth="1.5"/>
        <line x1="0"  y1="63"  x2="14" y2="63"  stroke="white" strokeWidth="1.5"/>
        <line x1="0"  y1="77"  x2="14" y2="77"  stroke="white" strokeWidth="1.5"/>
      </svg>

      {/* ── MATH SYMBOLS ── */}
      <div className="sbg-symbol sbg-sigma">∑</div>
      <div className="sbg-symbol sbg-pi">π</div>
      <div className="sbg-symbol sbg-root">√</div>
      <div className="sbg-symbol sbg-delta">Δ</div>
      <div className="sbg-symbol sbg-integral">∫</div>
      <div className="sbg-symbol sbg-infinity">∞</div>

      {/* ── BAR CHART center-right ── */}
      <svg className="sbg-icon sbg-chart1" viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="0"   y="55"  width="24" height="55" rx="4" fill="#6366f1"/>
        <rect x="32"  y="28"  width="24" height="82" rx="4" fill="#06b6d4"/>
        <rect x="64"  y="38"  width="24" height="72" rx="4" fill="#f59e0b"/>
        <rect x="96"  y="10"  width="24" height="100" rx="4" fill="#10b981"/>
        <line x1="-4" y1="110" x2="130" y2="110" stroke="#4338ca" strokeWidth="4" strokeLinecap="round"/>
        <line x1="0"  y1="0"   x2="0"   y2="113" stroke="#4338ca" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="12"  cy="50"  r="5" fill="#c7d2fe"/>
        <circle cx="44"  cy="23"  r="5" fill="#a5f3fc"/>
        <circle cx="76"  cy="33"  r="5" fill="#fde68a"/>
        <circle cx="108" cy="5"   r="5" fill="#6ee7b7"/>
        <polyline points="12,50 44,23 76,33 108,5" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="5,3"/>
      </svg>

      {/* ── SECOND PENCIL bottom-left ── */}
      <svg className="sbg-icon sbg-pencil2" viewBox="0 0 28 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0" width="26" height="82" rx="4" fill="#f43f5e"/>
        <rect x="1" y="75" width="26" height="16" rx="2" fill="#fda4af"/>
        <polygon points="1,91 27,91 14,110" fill="#1e1b4b"/>
        <rect x="1" y="0" width="26" height="12" rx="4" fill="#9ca3af"/>
        <rect x="3" y="12" width="22" height="5" fill="#fbbf24"/>
        <line x1="14" y1="18" x2="14" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
      </svg>

      {/* ── SECOND BOOK top-right ── */}
      <svg className="sbg-icon sbg-book2" viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="0" width="58" height="82" rx="5" fill="#06b6d4"/>
        <rect x="12" y="6" width="46" height="70" rx="3" fill="#a5f3fc"/>
        <rect x="6" y="0"  width="10" height="82" rx="3" fill="#0891b2"/>
        <line x1="24" y1="22" x2="52" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="24" y1="34" x2="52" y2="34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="24" y1="46" x2="44" y2="46" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="24" y1="58" x2="48" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>

    </div>
  )
}
