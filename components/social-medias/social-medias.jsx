import Image from "next/image";
import { FaTelegramPlane, FaTwitter, FaMedium, FaReddit } from "react-icons/fa";
import styles from "./social-medias.module.scss";

function SocialMedias() {
	return (
		<nav className={styles.SocialMedias}>
			<ul>
				<li>
					<a href="https://medium.com/@DYSTOPI" target="blank">
						<FaMedium />
					</a>
				</li>
				<li>
					<a
						href="https://www.reddit.com/user/Dystopi_world"
						target="blank"
					>
						<FaReddit />
					</a>
				</li>
				<li>
					<a href="https://t.me/+U8zjMRT5LpxmN2Fk" target="blank">
						<FaTelegramPlane />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/DystopiWorld" target="blank">
						<FaTwitter />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default SocialMedias;
