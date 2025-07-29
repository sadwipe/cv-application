import ExperienceElement from './ExperienceElement';

export default function ExperienceContainer({ formData, setFormData }) {
  return (
    <ul className='experience-forms'>
      {formData.experience.map((element) => (
        <ExperienceElement
          key={element.id}
          element={element}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
    </ul>
  );
}
