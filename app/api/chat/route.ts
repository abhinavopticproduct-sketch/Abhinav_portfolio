import { google } from "@ai-sdk/google";
import { streamText, UIMessage } from "ai";

export const maxDuration = 30;
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ask Gemini for a response based on the conversation history
    const coreMessages = messages.map((m: any) => {
      let content = m.content;
      if (!content && m.parts) {
        content = m.parts.map((p: any) => p.type === 'text' ? p.text : '').join("");
      }
      return {
        role: m.role || 'user',
        content: content || "",
      };
    });

    const response = await streamText({
      model: google("gemini-2.5-flash"), // Use flash for fast responses
      messages: coreMessages,
      system: `You are a helpful AI assistant for Abhinav Bhattarai's portfolio website. 
Abhinav is a Full Stack Developer from Nepal. 
Be concise, friendly, and professional. 
If asked about his skills or projects, encourage the visitor to look around the portfolio, and state that Abhinav specializes in Next.js, React, Node.js, TypeScript, and modern web development.
If asked about contact info, refer them to the Contact page.
If you don't know the answer, politely say so.`,
    });

    return response.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
