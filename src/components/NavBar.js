// Styling
import { LogoDark, NavProduct, NavBarContainer } from "../styles";
import { useHistory } from "react-router";
import { signout } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.replace("/");
  };

  return (
    <NavBarContainer>
      <nav className="navbar navbar-expand">
        <LogoDark to="/" style={{ width: "10%" }}>
          <img
            src="https://image-cdn.neatoshop.com/styleimg/70424/none/black/default/379255-20;1520375876x.jpg"
            alt="logo"
          />
        </LogoDark>
        <div className="navbar-nav ml-auto">
          {user ? (
            <p
              style={{
                padding: "0.25em 1em",
                whiteSpace: "nowrap",
                color: "white",
              }}
            >
              Hello, {user.firstName}!
            </p>
          ) : (
            <>
              <NavProduct
                to="/signup"
                className="nav-item"
                style={{ padding: "0.25em 1em", textDecoration: "none" }}
              >
                sign up
              </NavProduct>

              <NavProduct
                to="/signin"
                className="nav-item"
                style={{ padding: "0.25em 1em", textDecoration: "none" }}
              >
                sign in
              </NavProduct>
            </>
          )}
          {user && (
            <>
              <button
                style={{ height: "20%", whiteSpace: "nowrap" }}
                onClick={handleSignout}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
