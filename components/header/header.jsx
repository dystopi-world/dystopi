import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import styles from './header.module.scss';
import PresaleContext from '../../contexts/presale/presale-context';

function Header() {
	const { setIsVisible } = useContext(PresaleContext);
	const router = useRouter();
	const handleClick = (event, url) => {
		event.preventDefault();
		router.push(url);
	};

	const videoEl = useRef(null);

	const attemptPlay = () => {
		videoEl &&
			videoEl.current &&
			videoEl.current.play().catch((error) => {
				console.error('Error attempting to play', error);
			});
	};
	const attemptPlayRepeat = () => {
		videoEl &&
			videoEl.current &&
			setInterval(() => {
				videoEl.current.play().catch((error) => {
					console.error('Error attempting to play', error);
				});
			}, 45000);
	};

	useEffect(() => {
		setTimeout(() => {
			attemptPlay();
			attemptPlayRepeat();
		}, 1500);
	}, []);

	const presaleButtonStyle = {
		fontSize: '12px',
		background: '#201d24bb',
		transform: 'scale(0.9)'
	};
	return (
		<header className={styles.Header}>
			<Link aria-label="Navigate to home" href="/" passHref>
				<a href="dummy" className={styles.imageContainer}>
					<Image
						src="/images/logo.png"
						style={{ transform: 'scale(0.7)' }}
						alt="Dystopi logo"
						layout="fill"
						objectFit="contain"
					/>
				</a>
			</Link>
			<nav aria-label="Main menu" role="navigation">
				<ul>
					<li>
						<Link aria-label="Navigate to home" href="/" passHref>
							<a href="dummy">HOME</a>
						</Link>
					</li>
					<li>
						<Link href="/#story" passHref>
							<a href="dummy">STORY</a>
						</Link>
					</li>
					<li>
						<Link href="/#game-mechanism" passHref>
							<a href="dummy">GAME MECHANISM</a>
						</Link>
					</li>
					<li>
						<Link href="/#nfts" passHref>
							<a href="dummy">NFT</a>
						</Link>
					</li>
					<li>
						<Link href="/#tokenomics" passHref>
							<a href="dummy">TOKENOMICS</a>
						</Link>
					</li>
					<li>
						<Link href="/#whitepaper" passHref>
							<a href="dummy">WHITEPAPER</a>
						</Link>
					</li>
					<li>
						<Link href="/gallery" passHref>
							<a href="dummy">GALLERY</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Button
				aria-label="Join presale"
				onClick={() => setIsVisible(true)}
				style={presaleButtonStyle}
			>
				JOIN PRESALE
			</Button>
		</header>
	);
}

export default Header;
