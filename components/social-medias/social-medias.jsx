import Image from "next/image";
import { FaTelegramPlane, FaTwitter, FaMedium, FaReddit } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import styles from "./social-medias.module.scss";

function SocialMedias() {
	const [socialMediasRef, socialMediasInView] = useInView({
		threshold: 0.9,
		triggerOnce: false
	});

	const socialMediasStyle = (delay) => ({
		transition: "800ms",
		transitionDelay: delay,
		position: "relative",
		top: socialMediasInView ? 0 : "2.5rem",
		opacity: socialMediasInView ? 1 : 0
	});

	return (
		<nav className={styles.SocialMedias}>
			<ul ref={socialMediasRef}>
				<li style={socialMediasStyle(0)}>
					<a href="https://medium.com/@DYSTOPI" target="blank">
						<FaMedium />
					</a>
				</li>
				<li style={socialMediasStyle("200ms")}>
					<a
						href="https://www.reddit.com/user/Dystopi_world"
						target="blank"
					>
						<FaReddit />
					</a>
				</li>
				<li style={socialMediasStyle("400ms")}>
					<a href="https://t.me/+U8zjMRT5LpxmN2Fk" target="blank">
						<FaTelegramPlane />
					</a>
				</li>
				<li style={socialMediasStyle("600ms")}>
					<a href="https://twitter.com/DystopiWorld" target="blank">
						<FaTwitter />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default SocialMedias;
