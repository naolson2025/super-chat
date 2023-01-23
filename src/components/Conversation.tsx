interface Message {
  userId: number;
  text: string;
}

interface ConversationProps {
  messages: Message[];
}

const Conversation: React.FC<ConversationProps> = (props) => {
  if (!props.messages) return <div>No messages...</div>;

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
    <div className="h-60 overflow-y-scroll bg-teal-700 rounded-lg">
      {makeChatBubbles}
    </div>
  );
};

export default Conversation;
