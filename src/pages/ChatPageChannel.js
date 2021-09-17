import '../componentcss/ChatPageChannel.css';
import Main from '../components/Main';
import ChatNav from '../components/ChatNav';
import "bootstrap/dist/css/bootstrap.min.css";


function ChatPageChannel() {

    return (
        <div className="chat__page">
            <ChatNav />
            <div className="Body">
   
                
                <Main className="Main" />
   
                
            </div>
        </div>
    );
}

export default ChatPageChannel;