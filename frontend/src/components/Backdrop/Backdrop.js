import "./Backdrop.css";

const Backdrop = ({show, click }) => {
  return show && <div className="backdrop" onClick={click}>Back Drop</div>;
};

export default Backdrop;
