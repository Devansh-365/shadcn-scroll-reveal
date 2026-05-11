export function Logo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="18" width="24" height="6" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="4" y="11" width="22" height="6" rx="1" fill="currentColor" opacity="0.65" />
        <rect x="6" y="4" width="20" height="6" rx="1" fill="currentColor" />
      </svg>
      <span className="font-mono text-sm font-semibold">scroll-reveal</span>
    </div>
  )
}
