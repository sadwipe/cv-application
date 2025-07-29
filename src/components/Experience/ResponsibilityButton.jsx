import addIcon from '../../assets/images/add.svg';
import { addResponsibility } from '../../helpers/formUtils';

export default function ResponsibilityButton({
  element,
  formData,
  setFormData,
}) {
  return (
    <button
      type='button'
      onClick={() => {
        setFormData(addResponsibility(formData, element.id));
      }}
      className='responsibility-button'
    >
      <img src={addIcon} alt='Add responsibility button' />
      <span>Add Responsibility</span>
    </button>
  );
}
