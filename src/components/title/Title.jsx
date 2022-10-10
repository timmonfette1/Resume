import "./Title.css";

function Title(props) {
  return (
    <div>
      <div className="title">
        <div className="title primary">
          <h2>{props.primary}</h2>
        </div>
        {props.secondary && (
          <div className="title secondary">
            <h2>&nbsp;/&nbsp;</h2>
            <h2>{props.secondary}</h2>
          </div>
        )}
        {props.tertiary && (
          <div className="title tertiary">
            <h2>{props.tertiary}</h2>
          </div>
        )}
        {props.timeframe && (
          <div className="title timeframe">
            <h3>{props.timeframe}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Title;
