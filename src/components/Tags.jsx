import React from "react";

const Tags = ({ iconClass, TagName }) => {
    return (
        <div className="w-full flex items-center justify-between h-12 hover:bg-blue-50 cursor-pointer px-6 rounded-lg">
            <div className="flex items-center">
                <div className={`${iconClass} w-8 text-lg text-gray-600`}></div>
                <div className="text-gray-800">{TagName}</div>
            </div>
            <div className="far fa-chevron-right text-gray-500"></div>
        </div>
    );
};

export default Tags;
