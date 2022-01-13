import React from "react";

const Message = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

export default Message;
