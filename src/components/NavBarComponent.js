import logo from "../images/logo.svg";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function NavBarComponent() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button
                            type="button"
                            className="nav-toggle"
                            id="nav-toggle"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <NavLinks
                        className="nav-links"
                        iconName="nav-link"
                    ></NavLinks>
                    <SocialLinks className="nav-icons" classIcon="nav-icon" />
                </div>
            </nav>
        </>
    );
}
export default NavBarComponent;
