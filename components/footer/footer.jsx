import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
	FaMedium,
	FaReddit,
	FaTwitter,
	FaFacebook,
	FaDiscord
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

import styles from './footer.module.scss';
import LinktreeIcon from './linktree-icon';

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
		transition: '900ms',
		transitionDelay: delay,
		position: 'relative',
		top: socialsInView ? 0 : '2.5rem',
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
					<Link href="#home" passHref>
						<a href="dummy">HOME</a>
					</Link>
					<Link href="#story" passHref>
						<a href="dummy">STORY</a>
					</Link>
					<Link href="#nfts" passHref>
						<a href="dummy">NFT</a>
					</Link>
					<Link href="#tokenomics" passHref>
						<a href="dummy">TOKENOMICS</a>
					</Link>
					<Link href="#whitepaper" passHref>
						<a href="dummy">WHITEPAPER</a>
					</Link>
					<Link href="/gallery" passHref>
						<a href="dummy">GALLERY</a>
					</Link>
				</div>
				<div ref={socialsRef} className={styles.desktopSocials}>
					<div className={styles.separatorDot}></div>
					<a
						aria-label="Navigate to Dystopi's discord page"
						href="https://discord.gg/zTxct34m"
						target="blank"
					>
						<FaDiscord />
						<span>DISCORD</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's twitter page"
						href="https://twitter.com/DystopiWorld"
						target="blank"
					>
						<FaTwitter />
						<span>TWITTER</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's facebook page"
						href="https://www.facebook.com/dystopi01"
						target="blank"
					>
						<FaFacebook />
						<span>FACEBOOK</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's linktree page"
						href="https://linktr.ee/dystopi"
						target="blank"
					>
						<LinktreeIcon color="#8a8a8a" width={16} height={16} />
						<span>LINKTREE</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's instagram page"
						href="https://www.instagram.com/dystopi.world/"
						target="blank"
					>
						<AiFillInstagram />
						<span>INSTAGRAM</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's reddit page"
						href="https://www.reddit.com/user/Dystopi_world"
						target="blank"
					>
						<FaReddit color="#8c8a8e" />
						<span>REDDIT</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's medium.com page"
						href="https://medium.com/@DYSTOPI"
						target="blank"
					>
						<FaMedium color="#8c8a8e" />
						<span>MEDIUM</span>
					</a>
				</div>
			</nav>
			{isMobile && (
				<div ref={socialsRef} className={styles.mobileSocials}>
					<a
						aria-label="Navigate to Dystopi's discord page"
						href="https://discord.gg/zTxct34m"
						target="blank"
					>
						<FaDiscord color="#a967ff" />
						<span>DISCORD</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's twitter page"
						href="https://twitter.com/DystopiWorld"
						style={socialStyle('600ms')}
						target="blank"
					>
						<FaTwitter />
						<span>TWITTER</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's facebook page"
						href="https://www.facebook.com/dystopi01"
						target="blank"
					>
						<FaFacebook />
						<span>FACEBOOK</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's linktree page"
						href="https://linktr.ee/dystopi"
						target="blank"
					>
						<LinktreeIcon color="#a967ff" width={16} height={16} />
						<span>LINKTREE</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's instagram page"
						href="https://www.instagram.com/dystopi.world/"
						target="blank"
					>
						<AiFillInstagram />
						<span>INSTAGRAM</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's reddit page"
						href="https://www.reddit.com/user/Dystopi_world"
						style={socialStyle('200ms')}
						target="blank"
					>
						<FaReddit />
						<span>REDDIT</span>
					</a>
					<a
						aria-label="Navigate to Dystopi's medium.com page"
						href="https://medium.com/@DYSTOPI"
						style={socialStyle(0)}
						target="blank"
					>
						<FaMedium color="#a967ff" />
						<span>MEDIUM</span>
					</a>
				</div>
			)}
			<Link href="/" passHref>
				<a
					aria-label="Navigate to home"
					href="dummy"
					className={styles.logo}
					onClick={(event) => handleClick(event, '/#home')}
				>
					<Image
						src="/images/logo.png"
						style={{ transform: 'scale(0.7)' }}
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
