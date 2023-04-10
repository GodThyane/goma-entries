import React from 'react';
import { redirect } from 'next/navigation';
import CategorySlug from '@/app/category/[slug]/CategorySlug';
import { getCategoryBySlug } from '@/app/category/services/category.slug.service';
import { getCategoriesTitle } from '@/app/services/general.service';

interface Props {
   slug: string;
}

const CategorySlugPage = async ({ params: { slug } }: { params: Props }) => {
   const { data } = await getCategoryBySlug({
      context: {
         fetchOptions: {
            next: { revalidate: 86400 },
         },
      },
      variables: {
         slug,
      },
   });

   const count = data?.categoryCollection?.items.length ?? 0;

   if (count === 0) {
      redirect('/');
   }

   const { categoryDescription, title } =
      data?.categoryCollection?.items[0] ?? {};

   return (
      <CategorySlug
         slug={slug}
         description={categoryDescription!}
         title={title!}
      />
   );
};

export async function generateStaticParams() {
   const categories = await getCategoriesTitle({
      context: {
         fetchOptions: {
            next: { revalidate: 86400 },
         },
      },
   });

   const slugs = categories?.data?.categoryCollection?.items.map(
      (category) => category?.slug
   ) as string[];

   return slugs.map((slug) => ({ slug }));
}

export default CategorySlugPage;
