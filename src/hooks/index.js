import { useEffect, useRef } from 'react';

export const useAnimationFrame = callback => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef();
    // ...do we care about the previous time ref...?
    
    // okay so time is the default value going into this call I guess
    // we don't actually really care about the time.
    // we care about the previous state of the wavePaths array.
    const animate = () => {
      callback();
      requestRef.current = requestAnimationFrame(animate);
    }
    
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
  }