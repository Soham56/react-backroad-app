import { navLinks } from "../data";

function NavLinks({ className, iconName }) {
    return (
        <ul className={className} id={className}>
            {navLinks.map((link) => {
                const { href, text, id } = link;
                return (
                    <li key={id}>
                        <a href={href} className={iconName} rel="noreferrer">
                            {text}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
export default NavLinks;
