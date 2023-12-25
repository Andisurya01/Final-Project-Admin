/* eslint-disable react/prop-types */
const AllertReset = ({ message, type }) => {
    let bgColor = "";
    if (type === "warning") {
      bgColor = "bg-WARNING";
    } else if (type === "success") {
      bgColor = "bg-SUCCESS";
    }
    return (
      <div className={`${bgColor} text-white max-w-fit px-4 py-2 rounded-lg text-xs`}>
        {message}
      </div>
    );
  };
  export default AllertReset;
  