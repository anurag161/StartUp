import React, { Fragment, useState, useRef, useEffect } from "react";
import "./SignIn.css";
import Loader from "../Layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userActions";
import { useAlert } from "react-alert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneIcon from "@mui/icons-material/Phone";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const SignIn = ({ history }) => {
  //google authentication
  const clientId =
    "885870677297-n4svm8bqbb9gnpm2gunmvoupa68i4edb.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log("login success! Current User: ", res.credential);
    navigate("/");
    var userObject = jwt_decode(res.credential);
    console.log(userObject);

    const myForm = new FormData();

    myForm.set("name", userObject.name);
    myForm.set("mobile", 88888888);
    myForm.set("email", userObject.email);
    myForm.set("password", "nvfnnfkkkvbvhvbhhkkbfkfbkfek");
    dispatch(register(myForm));
  };
  const onFailure = (res) => {
    console.log("login failed! ", res);
  };
  // common authentication
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const { name, mobile, email, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    console.log("dispatch", dispatch(login(loginEmail, loginPassword)));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("mobile", mobile);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      console.log("logged in");
      navigate("/");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  let status = "";

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      status = "Sign in with Google";
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      status = "Sign up with Google";
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="LoginSignUpContainer">
              <div className="LoginSignUpBox">
                <div>
                  <div className="login_signUp_toggle">
                    <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                    <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                  </div>
                  <button ref={switcherTab}></button>
                </div>
                <br></br>
                <div className="signIndiv">
                  <GoogleLogin
                    clientId={clientId}
                    buttonText={status}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    scope="profile email"
                  />
                </div>
                <div class="or-container">
                  <div class="line-separator"></div>{" "}
                  <div class="or-label">OR</div>
                  <div class="line-separator"></div>
                </div>
                <form
                  className="loginForm"
                  ref={loginTab}
                  onSubmit={loginSubmit}
                >
                  <div className="loginEmail">
                    <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="loginPassword">
                    <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <Link to="/password/forgot">Forget Password ?</Link>
                  <input type="submit" value="Login" className="loginBtn" />
                </form>
                <form
                  className="signUpForm"
                  ref={registerTab}
                  encType="multipart/form-data"
                  onSubmit={registerSubmit}
                >
                  <div className="signUpName">
                    <PermIdentityIcon />
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="mobileNumber">
                    <PhoneIcon />
                    <input
                      type="tel"
                      placeholder="mobileNumber"
                      name="mobile"
                      pattern="[0-9]{10}"
                      value={mobile}
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="signUpEmail">
                    <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="signUpPassword">
                    <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                    />
                  </div>
                  <br></br>
                  <input type="submit" value="Register" className="signUpBtn" />
                </form>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </GoogleOAuthProvider>
  );
};

export default SignIn;
