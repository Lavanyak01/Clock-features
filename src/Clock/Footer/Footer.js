import "./Footer.css";
import Button from "../Shared/Component/Button/Button";
function Footer(props) {
  return (
    <div className="footer">
      <Button
        text={"Stopwatch"}
        className={props.selected === 0 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(0)}
      ></Button>
      <Button
        text={"Clock"}
        className={props.selected === 1 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(1)}
      ></Button>
    </div>
  );
}
export default Footer;