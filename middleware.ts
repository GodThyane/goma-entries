// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, res: NextResponse) {
   const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

   if (req.nextUrl.pathname.startsWith('/auth')) {
      const searchParams = new URLSearchParams(req.nextUrl.search);
      const destination = searchParams.get('p') || '/main';
      if (session) {
         return NextResponse.redirect(new URL(destination, req.url));
      }
   }

   return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
   matcher: ['/auth/:path*', '/main/:path*'],
};
