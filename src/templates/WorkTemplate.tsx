import CompetitiveProgrammingContent from "../organisms/CompetitiveProgrammingContent";
import SeaCreatureContent from "../organisms/SeaCreatureContent";
import styles from "./CommonTemplate.module.scss";

const WorkTemplate = () => {
  return (
    <>
      <div className={styles.ContentWrapper}>
        <CompetitiveProgrammingContent />
        <SeaCreatureContent />
      </div>
    </>
  );
};

export default WorkTemplate;
