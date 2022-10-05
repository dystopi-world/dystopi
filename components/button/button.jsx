import React from "react";
import styles from "./button.module.scss";

function Button({
	children,
	style = {},
	onClick = null,
	type = "button",
	ariaLabel = ""
}) {
	return (
		<button
			aria-label={ariaLabel}
			className={styles.Button}
			type={type}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
