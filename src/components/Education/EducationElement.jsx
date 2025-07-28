import { useState } from "react";

import { removeEducation } from "../../helpers/formUtils";

import EducationForm from "./EducationForm";
import DeleteButton from "../DeleteButton";

import openIcon from "../../assets/images/open.svg";

import "../../styles/EducationElement.css";

export default function EducationElement({ element, formData, setFormData }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li key={element.id} className="education-element">
      <div className="education-header">
        <h2 className="education-title">School</h2>
        <img
          onClick={() => setIsVisible(!isVisible)}
          src={openIcon}
          alt="Collapse education icon"
          className={"collapse-education-icon" + (isVisible ? " visible" : "")}
        />
      </div>
      {isVisible && <EducationForm id={element.id} element={element} formData={formData} setFormData={setFormData}/>}
      <DeleteButton onClick={() => setFormData(removeEducation(formData, element.id))} />
      <hr />
    </li>
  );
}
