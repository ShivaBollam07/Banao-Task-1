import { MdClose } from "react-icons/md";
import { useState } from "react";
import "../App.css";
import GoogleImg from "../assets/search.png";
import FacebookLogo from "../assets/fbLogo.png";
import MainImg from "../assets/mainImg.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Register = ({ show, showLg, showPassword, handleShowPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = () => {
    
  };

  return (
    <div className="modal-overlay">
      <Toaster />
      <div className="modal d-flex align-items-center">
        <div className="modal-content text-center">
          <div className="modal-body position-relative px-5">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="sign-in">Sign Up</div>
                <div className="d-none d-md-block">
                  Already have an account?{" "}
                  <span onClick={showLg} className="text-primary bot">
                    Sign In
                  </span>
                </div>
                <div className="d-md-none d-block">
                  <MdClose onClick={show} />
                </div>
              </div>
              <div className="d-flex gap-4">
                <div className="col-12 col-md-6">
                  <div className="">
                    <div className="col-md-12">
                      <div className="mb-3 col-6">
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control col-12 col-md-6 py-3"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                          />
                          <input
                            type="text"
                            className="form-control col-12 col-md-6 py-3"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control col-md-12 py-3"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control col-mid-12 py-3"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {showPassword ? (
                            <AiOutlineEyeInvisible
                              className="eye position-absolute top-50 end-0 translate-middle-y"
                              onClick={handleShowPassword}
                            />
                          ) : (
                            <AiOutlineEye
                              className="eye position-absolute top-50 end-0 translate-middle-y"
                              onClick={handleShowPassword}
                            />
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="position-relative">
                          <input
                            type="password"
                            className="form-control col-mid-12 py-3"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          style={{
                            backgroundColor: "#4C6FF5",
                          }}
                          onClick={handleSubmit}
                          className="button-create col-auto col-md-12"
                        >
                          Create Account
                        </button>
                        <div
                          onClick={showLg}
                          className="d-md-none bot cursor-pointer
                         
                        "
                        >
                          or,Sign in
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="">
                      <div className="col-md-12 d-flex justify-content-center align-items-center rounded  border border-1 border-dark">
                        <img
                          className="google-logo"
                          src={FacebookLogo}
                          alt="Logo"
                        />
                        <p className="mt-3">Sign in wih Facebook</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="">
                      <div className="col-md-12 d-flex justify-content-center align-items-center rounded  border border-1 border-dark">
                        <img
                          className="google-logo"
                          src={GoogleImg}
                          alt="Logo"
                        />
                        <p className="mt-3">Continue with Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center col fgt">
                    Forget Password?
                  </div>
                </div>
                <div className="col-6 d-none d-md-flex">
                  <img className="main-img" src={MainImg} alt="Logo" />
                </div>
              </div>
            </div>
            <div className="mdclose position-absoulte d-none d-md-block">
              <MdClose onClick={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
