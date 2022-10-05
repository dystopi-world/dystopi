import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PDFViewer from "./pdf-viewer";
import styles from "./seed-sale.module.scss";
import Button from "../button/button";
import PresaleContext from "../../contexts/presale/presale-context";

function SeedSale() {
	const {
		temporaryModalLoadedOnce,
		setTemporaryModalLoadedOnce,
		temporaryModalIsVisible,
		setTemporaryModalIsVisible
	} = useContext(PresaleContext);

	useEffect(() => {
		if (!temporaryModalLoadedOnce) {
			setTimeout(() => {
				setTemporaryModalIsVisible(true);
				setTemporaryModalLoadedOnce(true);
			}, 3000);
		}
	}, []);

	const [device, setDevice] = useState("desktop");
	const [file, setFile] = useState("/pdf-s/meghivas.pdf");
	const [pdfLanguage, setPdfLanguage] = useState("HU");
	const [pdfWidth, setPdfWidth] = useState(350);

	const checkDevice = () => {
		if (window.innerWidth < 3000) {
			setDevice("monitor");
			setPdfWidth(1100);
		}
		if (window.innerWidth < 1200) {
			setDevice("desktop");
			setPdfWidth(900);
		}
		if (window.innerWidth < 1024) {
			setDevice("tablet");
			setPdfWidth(700);
		}
		if (window.innerWidth < 768) {
			setDevice("mobile-large");
			setPdfWidth(400);
		}
		if (window.innerWidth < 510) {
			setDevice("mobile-small");
			setPdfWidth(340);
		}
	};

	useEffect(() => {
		checkDevice();
	}, []);
	const getDecorLinePosition = (device) => {
		if (device === "monitor") {
			return pdfLanguage === "EN" ? "8px" : "108px";
		}
		return pdfLanguage === "EN" ? "4px" : "68px";
	};
	const decorLineStyle = {
		left: getDecorLinePosition(device)
	};

	useEffect(() => {
		pdfLanguage === "EN"
			? setFile("/pdf-s/dystopi-seed-sale-en.pdf")
			: setFile("/pdf-s/dystopi-seed-sale-hu.pdf");
	}, [pdfLanguage]);

	const [isCopied, setIsCopied] = useState(false);
	const copyAddressToClipboard = () => {
		setIsCopied(true);
		navigator.clipboard.writeText(
			"0xBc7245864B47Fe4CB2138A7058786B38B4a8084d"
		);
	};

	const copyButtonStyle = {
		position: "relative",
		top: "3.5rem",
		transform: "translateX(0)",
		zIndex: 1000,
		fontSize: "0.75rem"
	};

	return (
		temporaryModalIsVisible && (
			<section className={styles.SeedSale}>
				<button
					aria-label="Close button"
					className={styles.closeButton}
					onClick={() => setTemporaryModalIsVisible(false)}
				>
					<AiOutlineClose />
				</button>
				<div className={styles.languageSelectorContainer}>
					<button
						aria-label="Set PDF language to english"
						onClick={() => setPdfLanguage("EN")}
					>
						English
					</button>
					<button
						aria-label="Set PDF language to hungarian"
						onClick={() => setPdfLanguage("HU")}
					>
						Hungarian
					</button>
					<div className={styles.decorLine} style={decorLineStyle} />
				</div>
				<Button
					ariaLabel="copy address to clipboard"
					style={copyButtonStyle}
					onClick={copyAddressToClipboard}
				>
					{isCopied
						? "copied: 0xBc7245864B47Fe4CB2138A7058786B38B4a8084d"
						: "Click here to copy USDT address"}
				</Button>
				<PDFViewer file={file} pdfWidth={pdfWidth} />
			</section>
		)
	);
}

export default SeedSale;
