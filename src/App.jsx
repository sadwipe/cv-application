import { useState } from "react";

import PersonalForm from "./components/PersonalForm";

import { initialData } from "./data/data";

import './styles/index.css'

export default function App() {

  const [formData, setFormData] = useState(initialData);

  return (
    <div className="resume-container">
      <div className="resume-builder">
        
        <section className="personal">
          <h1 class="card-title">Personal Info</h1>
          <PersonalForm formData={formData} setFormData={setFormData} section="personal"/>
        </section>

        <section className="education">
          <h1 class="card-title">Education</h1>
        </section>

        <section className="work">
          <h1 class="card-title">Work Experience</h1>
        </section>

      </div>
      <div className="resume-summary">
      </div>
    </div>
  )
}
