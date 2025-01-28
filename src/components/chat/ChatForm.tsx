export default function ChatForm() {
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
        />
        <button
          style={{
            padding: 10,
            background: "#006BD6",
            color: "white",
            borderRadius: 10,
            border: "none",
          }}
        >
          送信
        </button>
      </div>
    </div>
  );
}
