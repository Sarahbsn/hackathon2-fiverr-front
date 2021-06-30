import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../src/components/Conversation/ChatFeed';
import LoginForm from '../src/components/Conversation/LoginForm';
import './App.css';

const projectID = '7eeb20cc-d489-4ef5-88ac-25a75b970495';

const ChatApp = () => {
  if (localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Gabrielle"
      userSecret="Gabrielle"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default ChatApp;
