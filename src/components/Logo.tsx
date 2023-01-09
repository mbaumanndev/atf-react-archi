import React from 'react'

type LogoProps = {
    readonly width?: string | number
    readonly height?: string | number
}
export default function Logo({ width = "12.83", height="17.15" }: LogoProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 70 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 2.12042H16.5V20.9107L11.5133 37.5104L16.5 54.9199V93.1204H0V2.12042Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.3987 69C53.8667 69 69.6486 53.5538 69.6486 34.5C69.6486 15.4462 53.8667 0 34.3987 0C22.0606 0 12.203 8.16155 5.90506 17.5562C3.83619 20.6423 5.36044 23.4401 7.06124 26.5621C8.35235 28.932 9.74521 31.4887 9.74521 34.5C9.74521 37.6023 8.65963 40.6089 7.62702 43.4689C6.05124 47.8331 4.59884 51.8557 7.31588 55.3549C13.7538 63.6465 22.9375 69 34.3987 69ZM34.495 53.0959C44.5742 53.0959 52.745 44.7702 52.745 34.5C52.745 24.2298 44.5742 15.9042 34.495 15.9042C24.4158 15.9042 16.245 24.2298 16.245 34.5C16.245 44.7702 24.4158 53.0959 34.495 53.0959Z"
                fill="white"
            />
            <path
                d="M41 57.1201H63.9056V72.4201H44.9056L41 57.1201Z"
                fill="#F2C94C"
            />
        </svg>
    )
}
