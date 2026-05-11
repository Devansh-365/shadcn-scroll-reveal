export function Logo() {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 text-amber-500 dark:text-amber-400"
      >
        <rect x="2" y="18" width="24" height="6" rx="1" fill="currentColor" opacity="0.35" />
        <rect x="4" y="11" width="22" height="6" rx="1" fill="currentColor" opacity="0.65" />
        <rect x="6" y="4" width="20" height="6" rx="1" fill="currentColor" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">scroll-reveal</span>
    </div>
  )
}
