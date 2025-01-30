import { NextResponse } from "next/server";

let chatMessage = [
  {
    id: 1,
    role: "bot",
    message: "こんにちは",
  },
];

export async function GET() {
  return NextResponse.json(chatMessage);
}

export async function POST(request: any) {
  const data = await request.json();

  const newMessage = {
    id: chatMessage.length + 1,
    role: data.role || "user",
    message: data.message,
  };

  chatMessage.push(newMessage);

  chatMessage.push({
    id: chatMessage.length + 1,
    role: "bot",
    message: data.message,
  });

  NextResponse.json(chatMessage);
}
