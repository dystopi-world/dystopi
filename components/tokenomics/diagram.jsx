import Image from 'next/image';
import React, { useState } from 'react';
import DiagramInfo from './diagram-info';
import { diagramData } from './diagramData';
import styles from './tokenomics.module.scss';

function Diagram() {
	const [tealHovered, setTealHovered] = useState(false);
	const tealStyle = {
		transition: '250ms',
		boxShadow: tealHovered
			? '-5px -5px 100px 10px #6998ff'
			: '0 0 0 0 transparent'
	};
	const [eggplantHovered, setEggplantHovered] = useState(false);
	const eggplantStyle = {
		transition: '250ms',
		boxShadow: eggplantHovered
			? '-5px -5px 100px 10px #a967ff'
			: '0 0 0 0 transparent'
	};
	const [greenHovered, setGreenHovered] = useState(false);
	const greenStyle = {
		transition: '250ms',
		boxShadow: greenHovered
			? '-5px -5px 100px 10px #38d21f'
			: '0 0 0 0 transparent'
	};
	const [indigoHovered, setIndigoHovered] = useState(false);
	const indigoStyle = {
		transition: '250ms',
		boxShadow: indigoHovered
			? '15px -5px 80px 15px #6a00f4'
			: '0 0 0 0 transparent'
	};
	const [aquaHovered, setAquaHovered] = useState(false);
	const aquaStyle = {
		transition: '250ms',
		boxShadow: aquaHovered
			? '5px -2px 100px 10px #007afd'
			: '0 0 0 0 transparent'
	};
	const [turquoiseHovered, setTurquoiseHovered] = useState(false);
	const turquoiseStyle = {
		transition: '250ms',
		boxShadow: turquoiseHovered
			? '20px 80px 150px 100px #6EE3C0'
			: '0 0 0 0 transparent'
	};
	const [purpleHovered, setPurpleHovered] = useState(false);
	const purpleStyle = {
		transition: '250ms',
		boxShadow: purpleHovered
			? '1px -6px 65px 15px #df1dff'
			: '0 0 0 0 transparent'
	};
	const [kingBlueHovered, setKingBlueHovered] = useState(false);
	const kingBlueStyle = {
		transition: '250ms',
		boxShadow: kingBlueHovered
			? '10px -3px 65px 12px #2323ff'
			: '0 0 0 0 transparent'
	};
	const [iceBlueHovered, setIceBlueHovered] = useState(false);
	const iceBlueStyle = {
		transition: '250ms',
		boxShadow: iceBlueHovered
			? '30px 2px 80px 30px #aee9ff'
			: '0 0 0 0 transparent'
	};
	const [roseHovered, setRoseHovered] = useState(false);
	const roseStyle = {
		transition: '250ms',
		boxShadow: roseHovered
			? '30px -10px 100px 12px #ee4492'
			: '0 0 0 0 transparent'
	};

	const getInfoActions = (color) => {
		if (color == 'indigo')
			return {
				onMouseEnter: () => setIndigoHovered(true),
				onMouseLeave: () => setIndigoHovered(false)
			};
		if (color == 'aqua')
			return {
				onMouseEnter: () => setAquaHovered(true),
				onMouseLeave: () => setAquaHovered(false)
			};
		if (color == 'green')
			return {
				onMouseEnter: () => setGreenHovered(true),
				onMouseLeave: () => setGreenHovered(false)
			};
		if (color == 'turquoise')
			return {
				onMouseEnter: () => setTurquoiseHovered(true),
				onMouseLeave: () => setTurquoiseHovered(false)
			};
		if (color == 'purple')
			return {
				onMouseEnter: () => setPurpleHovered(true),
				onMouseLeave: () => setPurpleHovered(false)
			};
		if (color == 'rose')
			return {
				onMouseEnter: () => setRoseHovered(true),
				onMouseLeave: () => setRoseHovered(false)
			};
		if (color == 'teal')
			return {
				onMouseEnter: () => setTealHovered(true),
				onMouseLeave: () => setTealHovered(false)
			};
		if (color == 'eggplant')
			return {
				onMouseEnter: () => setEggplantHovered(true),
				onMouseLeave: () => setEggplantHovered(false)
			};
		if (color == 'kingBlue')
			return {
				onMouseEnter: () => setKingBlueHovered(true),
				onMouseLeave: () => setKingBlueHovered(false)
			};
		if (color == 'iceBlue')
			return {
				onMouseEnter: () => setIceBlueHovered(true),
				onMouseLeave: () => setIceBlueHovered(false)
			};
	};
	return (
		<div className={styles.Diagram}>
			<div
				style={tealStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxTeal}`}
			></div>
			<div
				style={eggplantStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxEggplant}`}
			></div>
			<div
				style={greenStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxGreen}`}
			></div>
			<div
				style={indigoStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxIndigo}`}
			></div>
			<div
				style={aquaStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxAqua}`}
			></div>
			<div
				style={turquoiseStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxTurquoise}`}
			></div>
			<div
				style={purpleStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxPurple}`}
			></div>
			<div
				style={kingBlueStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxKingBlue}`}
			></div>
			<div
				style={iceBlueStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxIceBlue}`}
			></div>
			<div
				style={roseStyle}
				className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxRose}`}
			></div>
			{diagramData &&
				diagramData.map((data, index) => (
					<DiagramInfo
						key={index}
						onMouseEnter={
							getInfoActions(data.infos.color).onMouseEnter
						}
						onMouseLeave={
							getInfoActions(data.infos.color).onMouseLeave
						}
						aligment={data.aligment}
						color={data.infos.color}
						infos={data.infos}
					/>
				))}

			<Image
				src={'/images/diagram.svg'}
				className={styles.diagramImage}
				layout="fill"
				alt="dystopi diagram about the tokenomics"
			/>
			<div className={styles.dashedCircle}>
				<div className={styles.content}>
					<h6>TOTAL SUPPLY</h6>
					<p>300.000.000 tokens</p>
				</div>
			</div>
			<div className={styles.mobilePercentages}>
				<p className={styles.percentageKingBlue}>
					{diagramData[0].infos.percentage}
				</p>
				<p className={styles.percentageAqua}>
					{diagramData[1].infos.percentage}
				</p>
				<p className={styles.percentageTeal}>
					{diagramData[2].infos.percentage}
				</p>
				<p className={styles.percentagePurple}>
					{diagramData[3].infos.percentage}
				</p>
				<p className={styles.percentageIndigo}>
					{diagramData[4].infos.percentage}
				</p>
				<p className={styles.percentageEggplant}>
					{diagramData[5].infos.percentage}
				</p>
				<p className={styles.percentageRose}>
					{diagramData[6].infos.percentage}
				</p>
				<p className={styles.percentageIceBlue}>
					{diagramData[7].infos.percentage}
				</p>
				<p className={styles.percentageTurquoise}>
					{diagramData[8].infos.percentage}
				</p>
			</div>
		</div>
	);
}

export default Diagram;
