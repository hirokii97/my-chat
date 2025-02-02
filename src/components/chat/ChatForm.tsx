"use client";

import { senderAtom } from "@/app/common/store/chat/chat";
import { useAtom } from "jotai";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatForm() {
  const [message, setMessage] = useState("");
  const [, setSender] = useAtom(senderAtom);
  const sendMessage = async () => {
    if (!message) return;

    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "user",
          message,
        }),
      });

      setSender(true);
    } catch (error) {
      console.error(error);
    }
    setMessage("");
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: 20,
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <input
          placeholder="メッセージを送ってみよう！"
          type="text"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            sendMessage();
          }}
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
}
