import { useEffect } from 'react';

// Sets document.title per page. Falls back to the site name if no title given.
const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | Al Kabir Developers` : 'Al Kabir Developers';
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
