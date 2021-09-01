import Modal from "../UI/Modal";
import styles from "./YourWalks.module.css";
import Button from "../UI/Button";

const YourWalks = (props) => {
  const walks = (
    <ul className={styles.walks}>
      {[
        {
          id: "id1",
          name: "Koi",
          date: "12.02.2022",
          length: "60",
        },
      ].map((dog) => (
        <li key={dog.id}>Dog: {dog.name} - on {dog.date} for {dog.length} minutes.</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <Button class={styles.close} action={props.onHideWalks}>X</Button>
      <div>Your Walks:</div>
      {walks}
      <Button class={styles.accept}>Lets walk!</Button>
    </Modal>
  );
};

export default YourWalks;