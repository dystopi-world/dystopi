import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import LinktreeIcon from '../footer/linktree-icon';
import styles from './social-medias.module.scss';

function SocialMedias() {
	const [socialMediasRef, socialMediasInView] = useInView({
		threshold: 0.9,
		triggerOnce: false
	});

	const socialMediasStyle = (delay) => ({
		transition: '800ms',
		transitionDelay: delay,
		position: 'relative',
		top: socialMediasInView ? 0 : '2.5rem',
		opacity: socialMediasInView ? 1 : 0
	});

	return (
		<nav className={styles.SocialMedias}>
			<ul ref={socialMediasRef}>
				<li style={socialMediasStyle(0)}>
					<a href="https://discord.gg/zTxct34m" target="blank">
						<FaDiscord />
					</a>
				</li>
				<li style={socialMediasStyle('200ms')}>
					<a href="https://twitter.com/DystopiWorld" target="blank">
						<FaTwitter />
					</a>
				</li>
				<li style={socialMediasStyle('400ms')}>
					<a href="https://www.facebook.com/dystopi01" target="blank">
						<FaFacebook />
					</a>
				</li>
				<li style={socialMediasStyle('600ms')}>
					<a href="https://linktr.ee/dystopi" target="blank">
						<LinktreeIcon />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default SocialMedias;
