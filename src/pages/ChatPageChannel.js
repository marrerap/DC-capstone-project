import '../componentcss/ChatPageChannel.css';
import Channels from '../components/Channels';
import Main from '../components/Main';
import ChatNav from '../components/ChatNav';
import Users from '../components/Users';
import "bootstrap/dist/css/bootstrap.min.css";
import OffCanvasDoc from '../components/OffCanvasDoc';
import OffCanvasChannels from '../components/OffCanvasChannels';

function ChatPageChannel() {

    return (
        <div className="chat__page">
            <ChatNav />
            <div className="Body">
                {/* <Channels className="Channels" /> */}
                <OffCanvasChannels />
                <Main className="Main" />
                {/* <Users className="Users" /> */}
                <OffCanvasDoc />
            </div>
        </div>
    );
}

export default ChatPageChannel;