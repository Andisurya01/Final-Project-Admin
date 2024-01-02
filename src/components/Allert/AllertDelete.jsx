/* eslint-disable react/prop-types */
import { useEffect } from "react";
const AllertDelete = ({ message, type,duration, onClose }) => {
    let bgColor = "";
    if (type === "OK") {
      bgColor = "bg-SUCCESS";
    } else {
      bgColor = "bg-WARNING";
    }
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
  
      return () => clearTimeout(timer);
    }, [duration, onClose]);
  
    return (
      <div className={`${bgColor} text-white max-w-fit px-4 py-2 rounded-full`}>
        {message}
      </div>
    );
  };
  export default AllertDelete
  