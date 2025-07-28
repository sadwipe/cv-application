import EducationElement from "./EducationElement";

import "../../styles/EducationContainer.css"

export default function EducationContainer({ formData, setFormData }) {
  return (
    <ul className="education-forms">
      {formData.education.map(element =>
        <EducationElement key={element.id} element={element} formData={formData} setFormData={setFormData} />
      )}
    </ul>
  )
}
