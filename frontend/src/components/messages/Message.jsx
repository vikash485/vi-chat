import {useAuthContext} from '../../context/AuthContext.jsx'
import { extractTime } from '../../utils/extractTime.js';
import useConversation from '../../zustand/useConversation.js';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? 'bg-blue-500' : "";
  const shake = message.shouldShake ? "shake" : "";
  // console.log(message);
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="Tailwind css chat bubble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor} pb-2 ${shake}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message