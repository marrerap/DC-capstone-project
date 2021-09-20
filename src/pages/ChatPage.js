import '../componentcss/ChatPage.css';
import ChatMain from '../components/ChatMain';
import ChatNav from '../components/ChatNav';
import "bootstrap/dist/css/bootstrap.min.css";


function ChatPage() {
    return (
        <div className="chat__page">
            <ChatNav />
            <br/>
            <div className="chatpage__Body">
                <ChatMain className="ChatMain" />
                
            </div>
        </div>
    );
}

export default ChatPage;