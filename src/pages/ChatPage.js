import '../componentcss/ChatPage.css';
import Channels from '../components/Channels';
import ChatNav from '../components/ChatNav';
import Users from '../components/Users';
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasChannels from '../components/OffCanvasChannels';
import MainDashboard from '../components/MainDashboard';

function ChatPage() {
    return (
        <div className="chat__page">
            <ChatNav />
            <div className="Body row">
                <MainDashboard className="Main col-12" />
                <OffCanvasChannels className="col-12"/>
            </div>
        </div>
    );
}

export default ChatPage;