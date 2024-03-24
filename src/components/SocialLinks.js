import { socialLinks } from "../data";

function SocialLinks({ className, classIcon }) {
    return (
        <ul className={className}>
            {socialLinks.map((link) => {
                const { href, icon, id } = link;
                return (
                    <li key={id}>
                        <a
                            href={href}
                            target="_blank"
                            className={classIcon}
                            rel="noreferrer"
                        >
                            <i className={icon}></i>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
export default SocialLinks;
