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
                {/* <Channels className="Channels" /> */}
                <ChatMain className="ChatMain" />
                {/* <Users className="Users" /> */}

            </div>
        </div>
    );
}

export default ChatPage;