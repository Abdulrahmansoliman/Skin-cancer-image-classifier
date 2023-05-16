import { NextRequest } from "next/server";
export const config = {
  runtime: "edge",
  api: {
      bodyParser: {
          sizeLimit: '4mb' // Set desired value here
      }
  }
}
export default async function handler(req: NextRequest) {
  const { image } = await req.json();
  if (!image) {
    return new Response("Missing image", { status: 400 });
  }
  if (req.method === "POST") {

    const result = {
      result: 'You have Melanoma',
    } 

    return new Response(JSON.stringify(result ));
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
