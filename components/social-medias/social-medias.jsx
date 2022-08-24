import Image from "next/image";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import styles from "./social-medias.module.scss";

function SocialMedias() {
	return (
		<nav className={styles.SocialMedias}>
			<ul>
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
				<li>
					<a href="https://linktr.ee/dystopi" target="blank">
						<Image
							width={24}
							height={24}
							src="/images/linktree.svg"
							alt="link for linktree"
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default SocialMedias;
