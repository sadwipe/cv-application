import { useState } from "react";

import PersonalForm from "./components/PersonalForm";

import { initialData } from "./data/data";

import './styles/index.css'

import openIcon from "./assets/images/open.svg"

export default function App() {

  const [formData, setFormData] = useState(initialData);

  // Collapse personal section
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="resume-container">
      <div className="resume-builder">
        
        <section className="personal">
          <div className="personal-header">
            <h1 className="card-title">Personal Info</h1>
            <img onClick={() => setIsVisible(!isVisible)} src={openIcon} alt="Collapse icon" className={"collapse-icon" + (isVisible ? " visible" : "")} />
          </div>
          {isVisible && <PersonalForm isVisible={isVisible} formData={formData} setFormData={setFormData} section="personal"/>}
        </section>

        <section className="education">
          <h1 className="card-title">Education</h1>
        </section>

        <section className="work">
          <h1 className="card-title">Work Experience</h1>
        </section>

      </div>
      <div className="resume-summary">
      </div>
    </div>
  )
}
