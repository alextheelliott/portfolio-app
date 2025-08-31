import { useEffect, useMemo, useState, useRef } from "react";

import { Stack } from '@mui/material'
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

// import FaultyTerminal from '../bits/FaultyTerminal/FaultyTerminal';
import Dither from '../bits/Dither/Dither';
import TextType from '../bits/TextType/TextType';

export default function Header({isMobile}) {
  const [scrolled, setScrolled] = useState(0);
  const minHeight = 100;
  const maxHeight = window.innerHeight * 1.0;
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize terminal so React doesn’t rebuild it on scroll
  // const background1 = useMemo(() => 
  //   <FaultyTerminal scale={1.8} tint={'#009cd5'} mouseStrength={1.5} noiseAmp={0.6} timeScale={0.6} gridMul={[1.5,1]}/>,
  // []);
  const background2 = useMemo(() => 
    <Dither waveSpeed={0.02} waveColor={[0, 0.5, 1]} mouseRadius={0.6}/>, 
  []);
  const title = useMemo(() => 
    <TextType text={['Alexander J. Elliott', 'Portfolio & Experience']} cursorCharacter="▎" pauseDuration={4000}/>, 
  []);

  return (
    <header
      style={{
        height: `${Math.max(maxHeight - (window.scrollY), minHeight)}px`,
        marginBottom: `${Math.min(Math.max(scrolled, 0), maxHeight-minHeight)}px`,
        background: "#000000",
        color: "white",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        zIndex: 1000,
        overflow: "hidden", // crop content
      }}
    >
      {/* Container keeps FaultyTerminal full-size, centered */}
      <div
        style={{
          height: `${maxHeight}px`,
          width: "100%",
          position: "relative",   // key: allows absolute children
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {background2}
        <div
          style={{
            position: "absolute",
            color: "white",
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "bold",
            zIndex: 2,
            pointerEvents: "none", // so clicks pass through if needed
          }}
        >
          {title}
        </div>
        <Stack
          direction='row'
          gap={1}
          style={{
            position: "absolute",
            bottom: "10px",
            color: "white",
            fontSize: isMobile ? "1.0rem" : "1.5rem",
            fontWeight: "lighter",
            pointerEvents: "none", // so clicks pass through if needed
            alignItems: 'center',
          }}
        >
          <KeyboardDoubleArrowDown />
          Scroll
        </Stack>
      </div>
    </header>
  );
}
