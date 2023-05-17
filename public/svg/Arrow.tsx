export function Arrow({ onClick }: { onClick: () => void }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4 7L8.24264 11.2426C8.63316 11.6332 9.26633 11.6332 9.65685 11.2426L13.8995 7"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
