import Head from 'next/head';
import { getTimelineItems } from '../cms-service';
import GameMechanism from '../components/game-mechanism/game-mechanism';
import InfoCards from '../components/game-mechanism/info-cards/info-cards';
import Landing from '../components/landing/landing';
import Newsletter from '../components/newsletter/newsletter';
import Nfts from '../components/nfts/nfts';
import Partners from '../components/partners/partners';
import Presale from '../components/presale/presale';
import Roadmap from '../components/roadmap/roadmap';
import SectionSeparator from '../components/section-separator/section-separator';
import SocialMedias from '../components/social-medias/social-medias';
import Story from '../components/story/story';
import ToGallery from '../components/to-gallery/to-gallery';
import Tokenomics from '../components/tokenomics/tokenomics';
import Whitepaper from '../components/whitepaper/whitepaper';

export async function getStaticProps() {
	const timelineItems = (await getTimelineItems()) || [];
	return {
		props: { timelineItems },
		revalidate: 900
	};
}

export default function Home({ timelineItems }) {
	return (
		<div>
			<Head>
				<title>Dystopi</title>
				<meta
					name="description"
					content="A new generation NFT game, save the earth from alien invasion! Gear up your hero with the best NFTs to fight against Gata’aga and collect daily rewards in Dyseum!"
				/>
				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<main>
				<Presale />
				{/* <SeedSale /> nem kell */}
				<Landing />
				{/* <SectionSeparator /> nem kell
				<Partners /> nem kell
				<SectionSeparator /> nem kell */}
				{/* innentől */}
				<SocialMedias />
				<SectionSeparator />
				<InfoCards />
				<SectionSeparator />
				<Story />
				<GameMechanism />
				<SectionSeparator />
				<Nfts />
				<SectionSeparator />
				<Tokenomics />
				<Roadmap timelineItems={timelineItems} />
				<Whitepaper />
				<ToGallery />
				<Newsletter />
			</main>
		</div>
	);
}
