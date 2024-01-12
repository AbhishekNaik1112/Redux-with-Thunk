import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Thunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const [showData, setShowData] = useState(false);

  const dataToggle = () => {
    setShowData(!showData);
  };
  const copyToClipboard = (text, name, email) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast.success(`${name} (${email}) copied to clipboard!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="p-4">
      <button
        onClick={() => {
          dispatch(fetchData());
          dataToggle();
        }}
        className={`bg-blue-500 text-white py-2 px-4 rounded transition duration-500 ease-in-out ${
          showData ? "bg-red-500 hover:bg-red-600" : "hover:bg-blue-600"
        }`}
      >
        {showData ? "Hide Data" : "Fetch Data"}
      </button>

      {showData && (
        <div className="mt-4">
          {userData.map((item) => (
            <div key={item.id} className="mb-2">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <h4 className="text-gray-600">{item.email}</h4>
                <button
                  onClick={() => {
                    copyToClipboard(
                      `${item.name}, ${item.email}`,
                      item.name,
                      item.email
                    );
                    console.log(
                      "Text copied to clipboard:",
                      `${item.name}, ${item.email}`
                    );
                  }}
                  className="bg-green-500 text-white py-1 px-2 rounded mt-2"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default DisplayData;
