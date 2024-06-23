import React, { useEffect } from "react";
import "./Header.css";
import newlogo4 from "../../../images/newlogo4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../actions/userActions";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const link = document.getElementById("si");
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    navigate("/");
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      console.log("logged in");
      link.textContent = "Hello";
      link.href = "#";
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <div className="big-navbar">
      <nav>
        <ul>
          <li>
            <a href="/" className="logo2 diff">
              <img src={newlogo4} alt="Overlay Image" />
            </a>
          </li>
          <div className="small">
            <li>
              <a href="/" className="diff right">
                Home
              </a>
            </li>
            <li>
              <a href="/T-shirts" className="diff right">
                T-shirts
              </a>
            </li>
            <li>
              <a href="/Polo T-shirts" className="diff right">
                Polo T-shirts
              </a>
            </li>
            <li>
              <a href="/Hoodies" className="diff right">
                Hoodies
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="diff right">
                About Us
              </a>
            </li>
            <li>
              <a href="/contactUs" className="diff right">
                Contact Us
              </a>
            </li>
            {isAuthenticated && <li>
              <a href="/trackOrder" className="diff right">
                <i className="fas fa-map-marker"></i>
              </a>
            </li>}
            { isAuthenticated && <li>
              <a href="/cart" className="diff right">
                <i className="fas fa-shopping-cart"></i> {`${cartItems.length}`}
              </a>
            </li>}
            { isAuthenticated && <li>
              <a href="/account" className="diff right">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>}
          </div>
          <li>
            <p>
              <a href="/SignIn" id="si">
                SignIn
              </a>{" "}
              &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
              <a href="/" onClick={logoutUser}>
                SignOut
              </a>
            </p>
          </li>
        </ul>
      </nav>
      <div class="navbar">
        <a className="narrow" href="/T-shirts">
          T-Shirts
        </a>
        <a className="narrow" href="/T-shirts">
          |
        </a>
        <a className="narrow" href="/Polo T-shirts">
          Polo T-Shirts
        </a>
        <a className="narrow" href="/Hoodies">
          |
        </a>
        <a className="narrow" href="/Hoodies">
          Hoodies
        </a>
      </div>
    </div>
  );
};

export default Header;
