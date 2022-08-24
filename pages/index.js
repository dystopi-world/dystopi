import Head from "next/head";
import { getTimelineItems } from "../cms-service";
import GameMechanism from "../components/game-mechanism/game-mechanism";
import Landing from "../components/landing/landing";
import Newsletter from "../components/newsletter/newsletter";
import Nfts from "../components/nfts/nfts";
import Presale from "../components/presale/presale";
import Roadmap from "../components/roadmap/roadmap";
import SectionSeparator from "../components/section-separator/section-separator";
import SocialMedias from "../components/social-medias/social-medias";
// import SocialMedias from '../components/social-medias/social-medias';
import Story from "../components/story/story";
import ToGallery from "../components/to-gallery/to-gallery";
import Tokenomics from "../components/tokenomics/tokenomics";
import Whitepaper from "../components/whitepaper/whitepaper";

export async function getStaticProps() {
	const timelineItems = (await getTimelineItems()) || [];
	return {
		props: { timelineItems },
		revalidate: 900
	};
}
/**
 * icons: double tick, clock / loading stuff, calendar
 */

export default function Home({ timelineItems }) {
	return (
		<div>
			<Head>
				<title>Dystopi</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<main>
				<Presale />
				{/* <SeedSale /> */}
				<Landing />
				<SocialMedias />
				<Story />
				{/* <SectionSeparator /> */}
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
