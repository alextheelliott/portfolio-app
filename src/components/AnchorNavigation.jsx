import { useEffect, useState, useRef } from "react";

import { Box, Link } from '@mui/material';

export default function AnchorNavigation({ sections }) {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState(sections.length > 0 ? sections[0].id : '');
  
  // A ref to store direct DOM references to section elements
  const sectionRefs = useRef({});

  useEffect(() => {
    // Populate the refs object on component mount or when sections change
    sections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id);
    });
  }, [sections]);
  
  useEffect(() => {
    const handleScroll = () => {
      // Add a vertical offset to trigger the active state slightly before the section top hits the screen top
      const scrollPosition = window.scrollY + 110;
  
      // Find the current section
      let currentSectionId = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section.id];
        if (element && element.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
          break;
        }
      }
      
      if (currentSectionId && currentSectionId !== activeSection) {
          setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection]); // Rerun effect if sections or activeSection changes

  /**
   * Handles the click event on a navigation link.
   * Prevents the default anchor jump and uses smooth scrolling instead.
   * @param {string} id - The ID of the section to scroll to.
   */
  const handleClick = (id) => (event) => {
    event.preventDefault();
    const element = sectionRefs.current[id];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({top: y, behavior: 'smooth'});
      // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: '120px', // Position it down from the top
        left: '20px',
        width: '200px',
        borderLeft: '2px solid #e0e0e0', // A subtle guide line
        paddingLeft: '15.25px',
        // Ensure it stays above other content
        zIndex: 5, 
      }}
    >
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <Box component="li" key={section.id} sx={{ position: 'relative', my: 1 }}>
              {/* This is the visual indicator for the active link */}
              {(
                <Box
                  sx={{
                    position: 'absolute',
                    left: '-18px', // Position over the main borderLeft
                    top: '50%',
                    transform: isActive ? 'translateY(-50%)' : '',
                    width: isActive ? '4px' : '0px',
                    height: '24px', // Taller than the text for emphasis
                    backgroundColor: 'primary.main',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
              )}
              <Link
                href={`#${section.id}`}
                onClick={handleClick(section.id)}
                underline="none"
                sx={{
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.9rem',
                  color: isActive ? 'primary.main' : 'text.secondary',
                  transition: 'all 0.3s ease-in-out',
                  display: 'block',
                  py: '4px',
                  '&:hover': {
                    color: 'primary.dark',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                {section.label}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};