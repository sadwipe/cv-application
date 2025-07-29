import ResponsibilityItem from './ResponsibilityItem';

import '../../../styles/Experience/Responsibilities/ResponsibilityContainer.css';

export default function ResponsibilitiesContainer({
  element,
  formData,
  setFormData,
}) {
  return (
    <ul className='responsibilities-container'>
      {element.responsibilities.map(res => {
        return (
          <ResponsibilityItem
            key={res.id}
            element={element}
            responsibility={res}
            formData={formData}
            setFormData={setFormData}
          />
        );
      })}
    </ul>
  );
}
