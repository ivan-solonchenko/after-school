import Link from "next/link";
import styleLink from "../styles/A.module.css";

export default function ({ text, href }) {

    return (
        <Link href={href} className={styleLink.link}>
            <span>{text}</span>
        </Link>
    )
}