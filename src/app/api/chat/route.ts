import { NextRequest, NextResponse } from "next/server";

let chatMessage = [{}];

export async function GET() {
  return NextResponse.json(chatMessage);
}

export async function POST(request: NextRequest) {
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

  return NextResponse.json(chatMessage);
}
