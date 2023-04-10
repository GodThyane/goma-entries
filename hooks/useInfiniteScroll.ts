import { useEffect } from 'react';

export const useInfiniteScroll = (
   isLoadingMore: boolean | undefined,
   isReachingEnd: boolean | undefined,
   setSize: (
      size: number | ((_size: number) => number)
   ) => Promise<any[] | undefined>,
   size: number
) => {
   useEffect(() => {
      const handleLoadMore = () => {
         setSize(size + 1);
      };
      const handleScroll = () => {
         if (isLoadingMore || isReachingEnd) return;
         const windowHeight =
            'innerHeight' in window
               ? window.innerHeight
               : document.documentElement.offsetHeight;
         const body = document.body;
         const html = document.documentElement;
         const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
         );

         const windowBottom = windowHeight + window.scrollY;
         if (windowBottom >= docHeight - 50) {
            handleLoadMore();
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [isLoadingMore, isReachingEnd, setSize, size]);
};
