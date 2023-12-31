/* eslint-disable react/prop-types */
import { useEffect } from "react";
const AllertReset = ({ message, type,duration, onClose }) => {
    let bgColor = "";
    if (type === "warning") {
      bgColor = "bg-WARNING";
    } else if (type === "success") {
      bgColor = "bg-SUCCESS";
    }
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
  
      return () => clearTimeout(timer);
    }, [duration, onClose]);
  
    return (
      <div className={`${bgColor} text-white max-w-fit px-4 py-2 rounded-lg text-xs`}>
        {message}
      </div>
    );
  };
  export default AllertReset;
  