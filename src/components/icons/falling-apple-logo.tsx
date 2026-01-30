import type { SVGProps } from 'react';

export function FallingAppleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.22,4.42A4.9,4.9,0,0,0,12,6.17,4.9,4.9,0,0,0,7.1,4.3C4.26,4.3,2,7.15,2,10.68,2,15.84,5.42,22,10.23,22,12.5,22,14,20.5,15.77,20.5,17.5,20.5,18.73,22,21,22c4.13,0,3.32-6.42,3.32-6.5C24.23,11.3,22.48,8.44,19.8,7,18,5.85,17.22,4.42Z" />
      <path d="M15.17,2A3.84,3.84,0,0,1,16.29,4,4.28,4.28,0,0,1,15.1,6.33,4.25,4.25,0,0,1,12.23,6,4.52,4.52,0,0,1,13.25,2Z" transform="translate(-1.4 -0.6) rotate(15 14.2 4)" />
    </svg>
  );
}
