import React, { useEffect, useState } from "react";

const Bio = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("bio page", token);
  });

  return <div></div>;
};

export default Bio;
