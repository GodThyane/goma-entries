'use client';

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Scalars } from '@/graphql/generated/schema';
import { Button, Typography, TypographyProps } from '@mui/material';
import React, { useMemo, useState } from 'react';

type ExcerptProps = {
   richText: Scalars['JSON'];
   limit?: number;
} & Pick<TypographyProps, 'color' | 'className'>;

const LIMIT = 180;

export const Excerpt = ({
   richText,
   limit = LIMIT,
   ...typographyProps
}: ExcerptProps) => {
   const plainText = documentToPlainTextString(richText);
   const excerpt = plainText.slice(0, limit).split(' ').slice(0, -1).join(' ');
   const [showMore, setShowMore] = useState(false);
   const isOver = useMemo(() => plainText.length > limit, [plainText, limit]);

   const handleReadMore = () => {
      setShowMore(!showMore);
   };

   return (
      <Typography variant="body2" {...typographyProps}>
         {showMore ? (
            <>
               {plainText}
               {isOver && <Button onClick={handleReadMore}>Read less</Button>}
            </>
         ) : (
            <>
               {excerpt}
               {isOver && (
                  <>
                     <span> (...) </span>
                     <Button onClick={handleReadMore}>Read more</Button>
                  </>
               )}
            </>
         )}
      </Typography>
   );
};
