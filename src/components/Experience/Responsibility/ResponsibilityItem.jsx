import { removeResponsibility } from '../../../helpers/formUtils';

import removeImg from '../../../assets/images/remove.svg';

import '../../../styles/Experience/Responsibilities/ResponsibilityItem.css';

export default function ResponsibilityItem({
  element,
  responsibility,
  formData,
  setFormData,
}) {

  function handleChange(value) {
    const newExperience = formData.experience.map(exp => {
      if(exp.id === element.id) {
        const newResponsibilities = exp.responsibilities.map(res => {
          if(res.id === responsibility.id) {
            return {
              ...res,
              task: value
            }
          }
          return res;
        });
        return {
          ...exp,
          responsibilities: newResponsibilities
        };
      }
      return exp;
    });

    setFormData({
      ...formData,
      experience: newExperience
    })
  }

  return (
    <li className='responsibility-item'>
      <textarea
        className="responsibility"
        onChange={(e) => handleChange(e.target.value)}
        value={responsibility.task}
        name='responsibility'
        placeholder='ex. implemented a new strategy...'
      />
      <button
        onClick={() => {
          setFormData(
            removeResponsibility(formData, element.id, responsibility.id),
          );
        }}
        type='button'
      >
        <img src={removeImg} alt='Remove responsibility' />
      </button>
    </li>
  );
}
