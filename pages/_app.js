import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import GalleryWrapper from "../contexts/gallery/gallery-wrapper";
import PresaleWrapper from "../contexts/presale/presale-wrapper";
import "../styles/globals.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
	const ReactDOM = require("react-dom");
	const axe = require("@axe-core/react");
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=G-JG73V8LGXW`}
			/>

			<Script id="google-analytics" strategy="lazyOnload">
				{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-JG73V8LGXW', {
								page_path: window.location.pathname,
							});
					`}
			</Script> */}

			<GalleryWrapper>
				<PresaleWrapper>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PresaleWrapper>
			</GalleryWrapper>
		</>
	);
}

export default MyApp;
