import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";
function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="relative flex h-[8%] gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md cursor-pointer">
      <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden absolute left-5">
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 h-[8vh] ml-6 items-center">
        <div className={`avatar ${getOnlineUsersStatus(selectedConversation?._id) === "Online" ? "online" : "offline"}`}>
          <div className="w-10 rounded-full">
            <img 
              src={profile} 
              alt={selectedConversation?.fullname || "User"} 
              onError={(e) => { e.target.src = "default-avatar.jpg"; }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-base">{selectedConversation?.fullname || "No user selected"}</h1>
          <span className="flex items-center gap-1 text-sm">
            <span className={`h-2 w-2 rounded-full ${getOnlineUsersStatus(selectedConversation?._id) === "Online" ? "bg-green-500" : "bg-gray-500"}`}></span>
            {selectedConversation ? getOnlineUsersStatus(selectedConversation._id) : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
