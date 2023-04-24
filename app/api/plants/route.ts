import { dbAdmin } from '@/firebaseAdmin';

export async function GET(request: Request) {
   const plants = dbAdmin.collection('entries');
   const snapshot = await plants.get();
   const data = snapshot.docs.map((doc: any) => doc.data());
   return new Response(JSON.stringify(data), {
      headers: {
         'Content-Type': 'application/json',
      },
   });
}
