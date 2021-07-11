import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";

export function SignInVButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#04d261" />
      Rodrigo Arcanjo
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
