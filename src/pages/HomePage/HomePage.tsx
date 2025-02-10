import { SubForm } from "../../containers/SubForm";
import styles from "./styles.module.scss";
export const HomePage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <h1>
          <span
            className="accented-text"
            style={{
              display: "block",
            }}
          >
            RECEIVE A REWARD
          </span>
          by completing the tasks and connecting your wallet
        </h1>
        <SubForm />
      </div>
    </div>
  );
};
