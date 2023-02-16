import React from 'react';
import { useState } from 'react';
import styles from './diagram-info.module.scss';

function DiagramInfo({ aligment, color, infos, onMouseEnter, onMouseLeave }) {
	const getColor = () => {
		if (color == 'indigo') return styles.infoIndigo;
		if (color == 'aqua') return styles.infoAqua;
		if (infos.color == 'green') return styles.infoGreen;
		if (color == 'turquoise') return styles.infoTurquoise;
		if (color == 'purple') return styles.infoPurple;
		if (color == 'rose') return styles.infoRose;
		if (color == 'teal') return styles.infoTeal;
		if (color == 'eggplant') return styles.infoEggplant;
		if (color == 'kingBlue') return styles.infoKingBlue;
		if (color == 'iceBlue') return styles.infoIceBlue;
	};

	const [hovered, setHovered] = useState(false);

	const onHoverIn = () => {
		setHovered(true);
		onMouseEnter();
	};

	const onHoverOut = () => {
		setHovered(false);
		onMouseLeave();
	};

	const subinfoStyle = {
		left: aligment === 'left' ? '3rem' : '132px',
		transform: infos.big ? 'translateY(-10px)' : 'translateY(0)'
		// right: aligment === 'right' ? 'unset' : '2rem'
	};

	const introStyle = {
		transform: hovered
			? 'translateY(0)'
			: infos.big
			? 'translateY(-10px)'
			: 'translateY(0)'
	};

	const longTextBox = {
		height: '100px'
	};

	const longTextBoxTextPosition = {
		top: '40%'
	};

	return (
		<div
			style={infos.big && longTextBox}
			onMouseEnter={onHoverIn}
			onMouseLeave={onHoverOut}
			className={`${styles.DiagramInfo} ${
				aligment === 'left'
					? styles.infoAlignLeft
					: styles.infoAlignRight
			} ${getColor()}`}
		>
			<p className={styles.percentage}>{infos.percentage}</p>
			<p style={introStyle} className={styles.intro}>
				{infos.intro}
			</p>
			<p style={subinfoStyle} className={styles.subInfo}>
				{infos.subInfo}
			</p>
			<p className={styles.tokens}>{infos.tokens}</p>
			<p
				style={infos.big && longTextBoxTextPosition}
				className={styles.amount}
			>
				{infos.amount}
			</p>
		</div>
	);
}

export default DiagramInfo;
