"use client";

import { senderAtom } from "@/app/common/store/chat/chat";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";

type InputMessage = {
  id: number;
  role: string;
  message: string;
};

export default function InputMessage() {
  const [inputMessage, setInputMessage] = useState<InputMessage[]>([]);
  const [sender, setSender] = useAtom(senderAtom);

  useEffect(() => {
    const getInputMessage = async () => {
      try {
        const res = await fetch("/api/chat", {
          method: "GET",
        });
        const data = await res.json();
        setInputMessage(data);
      } catch (error) {
        console.error(error);
      }
    };
    setSender(false);
    getInputMessage();
  }, [sender, setSender]);
  return (
    <div style={{ padding: "30px 20px", height: "100%" }}>
      {inputMessage?.map((post, index) => (
        <div key={index}>
          {post.role === "user" && (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "flex-end",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  padding: "10px 20px",
                  marginTop: 5,
                  background: "#fff",
                  borderRadius: 10,
                  lineHeight: 1.5,
                  height: "fit-content",
                }}
              >
                {post.message}
              </div>
            </div>
          )}
          {post.role === "bot" && (
            <div key={index} style={{ display: "flex", gap: 10 }}>
              <Image
                alt=""
                height={50}
                width={50}
                src="https://doodleipsum.com/700/avatar-2?i=0639d368201785f32891763286f61ca0"
              />
              <div
                style={{
                  padding: "10px 20px",
                  marginTop: 5,
                  background: "#006BD6",
                  borderRadius: 10,
                  lineHeight: 1.5,
                  height: "fit-content",
                  color: "white",
                }}
              >
                {post.message}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
