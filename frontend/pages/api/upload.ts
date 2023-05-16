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
    const result = await fetch(
      "http://127.0.0.1:5000/predict",
      {
        method: "POST",
        body: JSON.stringify({ image }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    const data = await result.json();

    return new Response(JSON.stringify(data));
    
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
