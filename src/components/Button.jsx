import addIcon from "../assets/images/add.svg"
import "../styles/Button.css";

export default function Button() {
  return (
    <button className="add-button">
      <img src={addIcon} alt="Add Education Image" />
      <span>Add Experience</span>
    </button>
  )
}
