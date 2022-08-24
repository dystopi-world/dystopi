import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import styles from "./footer.module.scss";
import LinktreeIcon from "./linktree-icon";

function Footer() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	const [socialsRef, socialsInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	const socialStyle = (delay) => ({
		transition: "900ms",
		transitionDelay: delay,
		position: "relative",
		top: socialsInView ? 0 : "2.5rem",
		opacity: socialsInView ? 1 : 0
	});

	const router = useRouter();
	const handleClick = (event, url) => {
		event.preventDefault();
		router.push(url);
	};

	return (
		<footer className={styles.Footer}>
			<nav>
				<div>
					<div className={styles.separatorDot}></div>
					<Link href="#home">
						<a onClick={(event) => handleClick(event, "/#home")}>
							HOME
						</a>
					</Link>
					<Link href="#story">
						<a onClick={(event) => handleClick(event, "/#story")}>
							STORY
						</a>
					</Link>
					<Link href="#game-mechanism">
						<a
							onClick={(event) =>
								handleClick(event, "/#game-mechanism")
							}
						>
							GAME MECHANISM
						</a>
					</Link>
					<Link href="#nfts">
						<a onClick={(event) => handleClick(event, "/#nfts")}>
							NFT
						</a>
					</Link>
					<Link href="#tokenomics">
						<a
							onClick={(event) =>
								handleClick(event, "/#tokenomics")
							}
						>
							TOKENOMICS
						</a>
					</Link>
					<Link href="#whitepaper">
						<a
							onClick={(event) =>
								handleClick(event, "/#whitepaper")
							}
						>
							WHITEPAPER
						</a>
					</Link>
					<Link href="/gallery">
						<a>GALLERY</a>
					</Link>
				</div>
				<div className={styles.separatorDot}></div>
				<div ref={socialsRef} className={styles.desktopSocials}>
					<a
						href="https://t.me/+U8zjMRT5LpxmN2Fk"
						style={socialStyle(0)}
						target="blank"
					>
						<FaTelegramPlane color="#8c8a8e" />
						<span>TELEGRAM</span>
					</a>
					<a
						href="https://twitter.com/DystopiWorld"
						style={socialStyle("200ms")}
						target="blank"
					>
						<FaTwitter />
						<span>TWITTER</span>
					</a>
					<a
						href="https://linktr.ee/dystopi"
						style={socialStyle("400ms")}
						target="blank"
					>
						<LinktreeIcon color="#8c8a8e" />
						<span>LINKTREE</span>
					</a>
				</div>
			</nav>
			{isMobile && (
				<div ref={socialsRef} className={styles.mobileSocials}>
					<a
						href="https://t.me/+U8zjMRT5LpxmN2Fk"
						style={socialStyle(0)}
						target="blank"
					>
						<FaTelegramPlane />
						<span>Telegram</span>
					</a>
					<a
						href="https://twitter.com/DystopiWorld"
						style={socialStyle("200ms")}
						target="blank"
					>
						<FaTwitter />
						<span>Twitter</span>
					</a>
					<a
						href="https://linktr.ee/dystopi"
						style={socialStyle("400ms")}
						target="blank"
					>
						<LinktreeIcon color="#a967ff" />
						<span>Linktree</span>
					</a>
				</div>
			)}
			<Link href="#home">
				<a
					className={styles.logo}
					onClick={(event) => handleClick(event, "/#home")}
				>
					<Image
						src="/images/logo.png"
						style={{ transform: "scale(0.7)" }}
						alt="Dystopi logo"
						layout="fill"
						objectFit="contain"
					/>
				</a>
			</Link>
		</footer>
	);
}

export default Footer;
