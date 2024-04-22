import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/ui/nav-links.module.css";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: "Home", href: "/" },
    { name: "Keepsafe Flow", href: "/keepsafe" },
    { name: "CONVOS", href: "/convos" },
    { name: "Support Services", href: "/support" },
    { name: "Guiding Lights", href: "/guiding-lights" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx([styles.navLink], {
                            [styles.navLinkFocused]: pathname === link.href,
                        })}
                        // HOW TO CHANGE STATE OF NAV-HEADER ON CLICK?
                    >
                        {/* <LinkIcon className='w-6' /> */}
                        <p className=''>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
