import { useEffect, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';

import { DesktopLayout } from './pages/Desktop';
import { MobileLayout } from './pages/Mobile';

// --- THEME SETUP (Optional, for better visuals) ---
const theme = createTheme({
  palette: {
    primary: {
      main: '#009cd5', // A standard blue
    },
    background: {
      default: '#f7f9fc',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.screen.availWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      const worstCaseWidth = Math.min(window.innerWidth, window.screen.availWidth)
      setIsMobile(worstCaseWidth <= breakpoint);
    };
    window.addEventListener("resize", handleResize);

    // trigger on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function App() {
  const sections = [
    { id: "abt", label: "About Me"   },
    { id: "prj", label: "Projects"   },
    { id: "exp", label: "Experience" },
    { id: "tea", label: "Teams"      },
    { id: "res", label: "Resume"     },
  ];

  const isMobile = useIsMobile();

  return (
    <ThemeProvider theme={theme}>
      {
        isMobile
          ?
        <MobileLayout sections={sections}/>
          :
        <DesktopLayout sections={sections}/>
      }
    </ThemeProvider>
  );
}

export default App;
