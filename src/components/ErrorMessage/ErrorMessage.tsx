import { Message } from "../../types/types";
import styles from "./ErrorMessage.module.sass";



const ErrorMessage = ({error}: Message) => {
  return (
    <div className={styles.container}>
      <div role="alert" className={styles.alert}>
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <p className={styles.text}>{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
