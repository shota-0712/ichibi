import type { SVGProps } from 'react';

export function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17.973 3H21l-6.498 7.433L22 21h-5.406l-4.264-5.428L7.2 21H3l7.02-8.033L2 3h5.526l3.832 5.1L17.973 3zm-.982 17h1.511L7.071 4h-1.55z" />
    </svg>
  );
}
