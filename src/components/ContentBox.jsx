import React from "react";

const ContentBox = ({ children }) => {
    return (
        <div className="bg-white p-4 rounded-xl border-2 border-gray-200 h-full flex justify-between flex-col relative">
            {children}
        </div>
    );
};

export default ContentBox;
