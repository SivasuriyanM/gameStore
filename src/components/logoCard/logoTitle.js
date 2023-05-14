import React from 'react'
import './style.css';

export default function LogoTitle() {
    const video = document.querySelector("video");
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
    }

  return (
    <div class="header">
    <video autoplay playsinline muted loop preload >
      {/* <source src="media/video.mp4" /> */}
      <source src="media/logo-video.mp4" />
    </video>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 315 130"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" />
          <text x="72" y="50">CS Games</text>
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>
  </div>
  )
}
