import Title from "../title/Title";
import "./Section.css";

function Section(props) {
  return (
    <div className="container">
      <div className="name">
        <h1>{props.sectionName}</h1>
      </div>
      <div className="content">
        <hr />
        {props.titlePrimary && (
          <Title
            primary={props.titlePrimary}
            secondary={props.titleSecondary}
            tertiary={props.titleTertiary}
            timeframe={props.titleTimeframe}
          />
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Section;
