import CompetitiveProgrammingContent from "../organisms/CompetitiveProgrammingContent";
import SeaCreatureContent from "../organisms/SeaCreatureContent";
import TadanoAction3DXGameContent from "../organisms/TadanoAction3DXGameContent";
import TapiTapiContent from "../organisms/TapiTapiContent";
import VoiceTravelerContent from "../organisms/VoiceTravelerContent";
import styles from "./CommonTemplate.module.scss";

const WorkTemplate = () => {
  return (
    <>
      <div className={styles.ContentWrapper}>
        <CompetitiveProgrammingContent />
        <br />
        <br />
        <SeaCreatureContent />
        <br />
        <br />
        <VoiceTravelerContent />
        <br />
        <br />
        <TadanoAction3DXGameContent />
        <br />
        <br />
        <TapiTapiContent />
        <br />
        <br />
        {/* <GoogleDialogFlowContent /> */}
      </div>
    </>
  );
};

export default WorkTemplate;
