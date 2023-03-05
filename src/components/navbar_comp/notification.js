import React, { useState } from "react";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { FiEye } from "react-icons/fi";

import { MdClose } from "react-icons/md";
import thumbnail1 from "./thumbnail1.jpg";
import thumbnail2 from "./thumbnail2.jpg";
import Image from "next/image";

const notifications = [
  {
    id: 1,
    message: "CryptoGuy is going live: Birthday livestream",
    time: "5 hours ago",
    thumbnail: thumbnail1,
  },
  {
    id: 2,
    message: "New video: How to use React Hooks",
    time: "6 hours ago",
    thumbnail: thumbnail2,
  },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBellClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClose = (id) => {
    // Remove the notification with the given id
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== id)
    );
  };

  return (
    <div className="relative inline-block ml-18">
      <button
        className="p-2 rounded-full bg-gray-200"
        onClick={handleBellClick}
      >
        <AiOutlineBell className="text-gray-600" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg">
          <div className="px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Notifications</h3>
            <button onClick={handleBellClick}>
              <AiOutlineSetting className="text-gray-400 w-6 h-6 mt-2 hover:text-gray-800" />
            </button>
          </div>
          <ul>
            {notifications.map((n) => (
              <li key={n.id} className="border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-96 space-x-4">
                    
                    
                    <div className="pr-4">
                      <p className="font-sm font-semibold">{n.message}</p>
                      <p className="text-gray-500 text-xs">{n.time}</p>
                    </div>
                    <Image
                    src={n.thumbnail}
                    alt="Thumbnail"
                    className="w-32 h-10 mb-8 object-cover pr-7 mr-8"
                    />
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => handleNotificationClose(n.id)}>
                      <AiOutlineBell className="text-gray-500 mb-6 h-4 w-4 hover:text-gray-700 mr-4" />
                    </button>
                    <button onClick={() => handleNotificationClose(n.id)}>
                      <FiEye className="mb-6" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {notifications.length === 0 && (
            <div className="px-4 py-2 text-center">
              <p className="text-gray-500">No notifications</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
