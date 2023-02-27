import React from 'react';
import { AiOutlineBell } from "react-icons/ai";
const Notification = () => {
  return (
    <div className="ml-18">
      <button className="p-2 rounded-full bg-gray-200">
        <AiOutlineBell className="text-gray-600" />
      </button>
    </div>
  );
};

export default Notification;