import React, { useState } from "react";
import "./styles.css";
import Header from "../../Header";
import Footer from "../../Footer";

const ChatMessage = ({ message, isTeacher }) => {
  return (
    <div className={isTeacher ? "teacher-message" : "student-message"}>
      {message}
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [chatPartner, setChatPartner] = useState("Teacher 1"); // Default chat partner

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, isTeacher: false }]);
      setInputText("");
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">Teachers</h2>

          <ul>
            <li>Teacher 1</li>
            <li>Teacher 2</li>
          </ul>
        </div>

        <div className="flex-1 p-4">
          <div className="h-4/5 border border-dashed  rounded-lg overflow-y-auto border-customBlue">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.text}
                isTeacher={msg.isTeacher}
              />
            ))}
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 border rounded-l-lg p-2"
            />
            <button
              onClick={handleMessageSend}
              className="bg-blue-500 text-white px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
