export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Diamond outline */}
        <path d="M 100 170 L 170 100 L 100 30 L 30 100 Z" stroke="currentColor" opacity="0.3" />
        
        {/* Top chevron */}
        <path d="M 30 80 L 100 10 L 170 80" stroke="currentColor" />
        {/* Middle chevron */}
        <path d="M 30 130 L 100 60 L 170 130" stroke="currentColor" />
        {/* Bottom chevron */}
        <path d="M 30 180 L 100 110 L 170 180" stroke="currentColor" />
      </g>
    </svg>
  );
}
