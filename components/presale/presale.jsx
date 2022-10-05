import { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Button from "../button/button";
import styles from "./presale.module.scss";
import PresaleContext from "../../contexts/presale/presale-context";

function Presale() {
	const { isVisible, setIsVisible } = useContext(PresaleContext);

	const [email, setEmail] = useState("");
	const [state, setState] = useState("IDLE");
	const [errorMessage, setErrorMessage] = useState(null);

	const subscribe = async (event) => {
		event.preventDefault();
		setState("LOADING");
		setErrorMessage(null);
		try {
			const response = await axios.put("/api/test", {
				email,
				type: "presale"
			});
			setState("SUCCESS");
			setEmail("");
			setTimeout(() => {
				setIsVisible(false);
			}, 2500);
		} catch (e) {
			setErrorMessage(e.response.data.error);
			setState("ERROR");
		}
	};

	return (
		isVisible && (
			<div className={styles.Presale}>
				<form
					aria-label="Subscribe to newsletter"
					className={styles.form}
					method="POST"
					onSubmit={(event) => subscribe(event)}
				>
					<button
						aria-label="close modal"
						className={styles.closeButton}
						type="button"
						onClick={() => setIsVisible(false)}
					>
						<AiOutlineClose />
					</button>
					<h3 className={styles.title}>DON&apos;T MISS THE NEWS</h3>
					<p className={styles.sectionInfo}>
						Subscribe to our newsletter and we keep you up-to-date
						about world of Dystopi
					</p>
					<div>
						<label>
							<input
								autoComplete="on"
								name="email"
								type="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								placeholder="john.doe@gmail.com"
							/>
						</label>
						<Button
							ariaLabel="Subscribe to newsletter"
							type="submit"
						>
							SUBSCRIBE
						</Button>
					</div>
				</form>
				{state === "ERROR" && (
					<p className={styles.errorMessage}>{errorMessage}</p>
				)}
				{state === "SUCCESS" && (
					<p className={styles.successMessage}>Success!</p>
				)}
			</div>
		)
	);
}

export default Presale;
