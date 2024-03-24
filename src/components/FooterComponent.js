import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function FooterComponent() {
    return (
        <>
            <footer className="section footer">
                <NavLinks
                    className="footer-links"
                    iconName="footer-link"
                ></NavLinks>
                <SocialLinks className="footer-icons" classIcon="footer-icon" />
                <p className="copyright">
                    copyright &copy; Backroads travel tours company
                    <span id="date">{new Date().getFullYear()}</span> all rights
                    reserved
                </p>
            </footer>
        </>
    );
}
export default FooterComponent;
