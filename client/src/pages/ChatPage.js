import '../componentcss/ChatPage.css';
import Channels from '../components/Channels';
import Main from '../components/Main';
import TitleBar from '../components/TitleBar';
import Users from '../components/Users';
import "bootstrap/dist/css/bootstrap.min.css";

function ChatPage() {
    return (
        <div className="chat__page">
            <TitleBar />
            <div className="Body">
                <Channels className="Channels" />
                <Main className="Main" />
                <Users className="Users" />
            </div>
        </div>
    );
}

export default ChatPage;