import ResponsibilityButton from './ResponsibilityButton';
import ResponsibilitiesContainer from './Responsibility/ResponsibilitiesContainer';

import '../../styles/Experience/ExperienceForm.css';

export default function ExperienceForm({
  element,
  formData,
  setFormData,
  setTitle,
}) {
  function handleData(id, field, value) {
    const newExperience = formData.experience.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          [field]: value,
        };
      } else {
        return element;
      }
    });
    setFormData({
      ...formData,
      experience: newExperience,
    });
  }

  return (
    <form className='experience-form'>
      <div className='input-data'>
        <label htmlFor='title'>Job Title</label>
        <input
          onChange={(e) => {
            handleData(element.id, 'title', e.target.value);
            setTitle(e.target.value);
          }}
          id='title'
          value={element.title}
          placeholder='Title'
          autoComplete='on'
          type='text'
          maxLength={35}
          minLength={5}
        />
      </div>
      <div className='input-data'>
        <label htmlFor='company'>Company</label>
        <input
          type='text'
          autoComplete='on'
          placeholder='Title of Study'
          id='company'
          value={element.company}
          onChange={(e) => handleData(element.id, 'company', e.target.value)}
        />
      </div>

      <div className='input-data'>
        <h3 className='responsibilities-title'>Responsibilities</h3>
        <ResponsibilitiesContainer
          element={element}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <div className='input-data'>
        <ResponsibilityButton
          element={element}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <div className='input-data'>
        <label htmlFor='start-date'>Start date</label>
        <input
          placeholder='Start Date'
          type='date'
          id='start-date'
          value={element.startDate}
          autoComplete='on'
          onChange={(e) => handleData(element.id, 'startDate', e.target.value)}
        />
      </div>
      <div className='input-data'>
        <label htmlFor='end-date'>End date</label>
        <input
          type='date'
          placeholder='end-date'
          id='end-date'
          value={element.endDate}
          autoComplete='on'
          onChange={(e) => handleData(element.id, 'endDate', e.target.value)}
        />
      </div>
    </form>
  );
}
