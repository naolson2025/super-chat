interface Message {
  userId: number;
  text: string;
}

interface MessageHistoryProps {
  messages: Message[];
}

const MessageHistory: React.FC<MessageHistoryProps> = (props) => {
  const makeChatBubbles = props.messages.map((message, index) => {
      const isStart = message.userId === 1;
      const chatClass = isStart ? 'chat-start' : 'chat-end';
      return (
        <div key={index} className={`chat ${chatClass}`}>
          <div className="chat-bubble">{message.text}</div>
        </div>
      );
    });

  return (
    <div className="h-60 overflow-y-scroll">
      {makeChatBubbles}
    </div>
  );
};

export default MessageHistory;
