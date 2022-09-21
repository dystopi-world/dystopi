import { useState } from "react";
import PresaleContext from "./gallery-context";

function GalleryWrapper({ children }) {
	const [lastActiveSlideIndex, setLastActiveSlideIndex] = useState(0);
	const updateLastActiveSlideIndex = (index, actualGalleryTab) => {
		actualGalleryTab === "images" && setLastActiveSlideIndex(index);
	};

	return (
		<PresaleContext.Provider
			value={{
				lastActiveSlideIndex,
				updateLastActiveSlideIndex
			}}
		>
			{children}
		</PresaleContext.Provider>
	);
}

export default GalleryWrapper;
