import Image from "next/image";

export default function ChatMessage() {
  return (
    <div style={{ padding: "30px 20px", height: "100%" }}>
      {/* 相手側のメッセージ */}
      <div style={{ display: "flex", gap: 10 }}>
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
            background: "#fff",
            borderRadius: 10,
            lineHeight: 1.5,
            height: "fit-content",
          }}
        >
          こんにちは
        </div>
      </div>
      {/* 自分側のメッセージ */}
      <div
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
            background: "#006BD6",
            borderRadius: 10,
            lineHeight: 1.5,
            height: "fit-content",
            color: "white",
          }}
        >
          おはよう
        </div>
      </div>
    </div>
  );
}
