import Layout from "../components/layout";
import GalleryWrapper from "../contexts/gallery/gallery-wrapper";
import PresaleWrapper from "../contexts/presale/presale-wrapper";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<GalleryWrapper>
			<PresaleWrapper>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PresaleWrapper>
		</GalleryWrapper>
	);
}

export default MyApp;
