import React, { useState } from "react";
import axios from "axios";

const Logout = () => {
  const [err, setErr] = useState(null);

  const logout = async () => {
    try {
      await axios.post("http://localhost:3001/api/auth/logout");
      localStorage.removeItem("user"); 
      window.location.replace("/login");
      console.log("Logout successful");
    } catch (err) {
      setErr(err.response.data);
      console.error("Logout failed:", err.response.data);
    }
  };

  return (
    <div>
      {err && <div>{err}</div>}
      <button id="logout"onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
