import { useState, useEffect } from 'react';
// import debounce from 'debounce';

const useIntersected = ({ node, margin }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const HonChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      }
    };

    const { current = null } = node;

    const observer = new IntersectionObserver(HonChange, {
      rootMargin: margin,
    });

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return { show };
};

export default useIntersected;
