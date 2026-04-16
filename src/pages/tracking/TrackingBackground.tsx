export const TrackingBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-surface-50 flex items-center justify-center">
    {/* Base lighting / radial glows */}
    <div 
      className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-[100px] opacity-70 animate-pulse" 
      style={{ animationDuration: '8s' }} 
    />
    <div 
      className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-100/40 rounded-full blur-[100px] opacity-70 animate-pulse" 
      style={{ animationDuration: '6s', animationDelay: '1s' }} 
    />

    {/* Dynamic Background Map / Network */}
    <svg 
      className="absolute w-full h-[120%] min-w-[1200px]" 
      preserveAspectRatio="xMidYMid slice" 
      viewBox="0 0 1920 1080" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Clean Isometric/Hex-like Grid Pattern */}
        <pattern id="hexGrid" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
          <path d="M 30 0 L 60 17.32 L 60 51.96 L 30 69.28 L 0 51.96 L 0 17.32 Z" fill="none" stroke="currentColor" className="text-surface-200" strokeWidth="1" opacity="0.5" />
          <path d="M 30 69.28 L 30 103.92 M 0 51.96 L -30 69.28 M 60 51.96 L 90 69.28" fill="none" stroke="currentColor" className="text-surface-200" strokeWidth="1" opacity="0.5" />
        </pattern>
        
        {/* Gradients */}
        <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" className="text-primary-500" />
          <stop offset="50%" stopColor="currentColor" className="text-accent-500" />
          <stop offset="100%" stopColor="currentColor" className="text-primary-600" />
        </linearGradient>

        <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="glowPulse" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <g id="hubMarker">
          <circle cx="0" cy="0" r="5" className="fill-surface-300" />
          <circle cx="0" cy="0" r="2" className="fill-white" />
        </g>
      </defs>

      {/* Grid Background */}
      <rect width="100%" height="100%" fill="url(#hexGrid)" />

      {/* Secondary Logistics Network (Inactive background routes) */}
      <g strokeWidth="1.5" fill="none" className="stroke-surface-300" opacity="0.3" strokeDasharray="4 4" strokeLinecap="round">
        <path d="M 200 800 Q 500 500 800 200 T 1500 300" />
        <path d="M 100 200 Q 400 400 700 800 T 1600 900" />
        <path d="M 1200 100 Q 1400 500 1800 800" />
        <path d="M 800 200 L 700 800" />
        <path d="M 1500 300 L 1600 900" />
        
        {/* Cross Continental Arch */}
        <path d="M -200 1000 C 400 200 1200 200 2100 1000" />
      </g>

      {/* Hero Active Delivery Route (Tracking Path) */}
      <g strokeWidth="3" fill="none" stroke="url(#activeRouteGrad)" filter="url(#glowLight)" strokeLinecap="round">
         {/* Faded highlight shadow underneath the route */}
         <path d="M -100 650 C 400 350 700 800 1100 500 S 1500 200 2100 450" opacity="0.2" strokeWidth="8" />
         
         {/* Long active dash mimicking the parcel traveling */}
         <path d="M -100 650 C 400 350 700 800 1100 500 S 1500 200 2100 450" strokeDasharray="25 4000">
           <animate attributeName="stroke-dashoffset" from="4025" to="0" dur="8s" repeatCount="indefinite" />
         </path>

         {/* Secondary pulse on the same path */}
         <path d="M -100 650 C 400 350 700 800 1100 500 S 1500 200 2100 450" strokeDasharray="8 4000" strokeWidth="5">
           <animate attributeName="stroke-dashoffset" from="3950" to="-75" dur="8s" repeatCount="indefinite" />
         </path>
         
         {/* Tertiary dashed tail */}
         <path d="M -100 650 C 400 350 700 800 1100 500 S 1500 200 2100 450" strokeDasharray="2 6" strokeWidth="1" opacity="0.5">
           <animate attributeName="stroke-dashoffset" from="8" to="0" dur="0.5s" repeatCount="indefinite" />
         </path>
      </g>
      
      {/* Fast Parallel Routes or Local Delivery vehicles */}
      <g strokeWidth="2" fill="none" className="stroke-primary-400" filter="url(#glowLight)" strokeLinecap="round">
         <path d="M 1500 1200 C 1200 800 1100 300 1800 -100" strokeDasharray="12 2500" opacity="0.7">
           <animate attributeName="stroke-dashoffset" from="2512" to="0" dur="7s" repeatCount="indefinite" />
         </path>
         <path d="M 300 -100 C 500 400 200 800 800 1200" strokeDasharray="15 2200" className="stroke-accent-400" opacity="0.8">
           <animate attributeName="stroke-dashoffset" from="0" to="-2215" dur="6s" repeatCount="indefinite" />
         </path>
      </g>

      {/* Location Markers & Hubs */}
      <g>
        {/* Inactive Hubs */}
        <use href="#hubMarker" x="800" y="200" />
        <use href="#hubMarker" x="700" y="800" />
        <use href="#hubMarker" x="1500" y="300" />
        <use href="#hubMarker" x="1600" y="900" />

        {/* Highlighted Transit Checkpoint 1 */}
        <g transform="translate(1100, 500)">
          <circle cx="0" cy="0" r="9" className="fill-white stroke-primary-500" strokeWidth="2.5" filter="url(#glowPulse)" />
          <circle cx="0" cy="0" r="4" className="fill-primary-500" />
          <circle cx="0" cy="0" r="25" className="stroke-primary-500 fill-none" opacity="0" strokeWidth="1.5">
            <animate attributeName="r" values="9;40" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Scanning upward beam effect */}
          <path d="M -6 -12 L 0 -35 L 6 -12" className="fill-primary-500/20" filter="url(#glowPulse)">
             <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Highlighted Transit Checkpoint 2 (Origin/Dest) */}
        <g transform="translate(450, 410)">
           <circle cx="0" cy="0" r="7" className="fill-white stroke-accent-500" strokeWidth="2" filter="url(#glowPulse)" />
           <circle cx="0" cy="0" r="3" className="fill-accent-500" />
           <circle cx="0" cy="0" r="18" className="stroke-accent-500 fill-none" opacity="0" strokeWidth="1.5">
            <animate attributeName="r" values="7;30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>
      
      {/* Floating Parcels Scans (Data syncing abstract visual) */}
      <g strokeWidth="2" strokeDasharray="2 8" fill="none">
        <path d="M 1100 480 L 1100 350" className="stroke-primary-400" opacity="0.4">
           <animate attributeName="stroke-dashoffset" values="10;0" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 450 390 L 450 280" className="stroke-accent-400" opacity="0.4">
           <animate attributeName="stroke-dashoffset" values="10;0" dur="1.2s" repeatCount="indefinite" />
        </path>
      </g>

    </svg>
    
    {/* Soft Vignette Overlay to blend SVGs back into the light theme background seamlessly */}
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ background: 'radial-gradient(circle at center, transparent 20%, var(--color-surface-50) 90%)' }} 
    />
  </div>
);
