import { Card, Grid } from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Login.css";
import a from "./videdo/a.mp4";
const Authentication = () => {
  const [login, setlogin] = useState(true);
  const handesubmit = () => {
    if (login == true) {
      setlogin(false);
    } else {
      setlogin(true);
    }
  };

  return (
    <div className="w-full h-screen ">
      <div className="h-[100%] w-[100%] fixed">
        <video src={a} className=" relative" autoPlay muted loop></video>
      </div>
      <div className="w-[100%] h-[100%]  bg-[#af87e38b] flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-top  items-center min-h-[60%] min-w-[30%] border-solid border-2 border-white p-5  ">
          <div id="par" className="card py-5 w-full">
            <div>{login ? <Login /> : <Register />}</div>

            <Card
              sx={{
                background: "#522e82",
                color: "white",
                marginTop: "2vh",
              }}
            >
              {login ? (
                <div className="text-center w-full h-[5vh] py-[5px] bt" id="bt">
                  if you dont have an account?
                  <span
                    id="span"
                    className="text-black font-semibold hover:text-white"
                    onClick={handesubmit}
                  >
                    Register
                  </span>
                </div>
              ) : (
                <div className="text-center h-[5vh] py-[5px] " id="bt">
                  Already have an account?{" "}
                  <span className="text-black spn" onClick={handesubmit}>
                    Login
                  </span>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
