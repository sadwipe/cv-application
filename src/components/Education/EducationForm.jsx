import "../../styles/EducationForm.css";

export default function EducationForm({
  id,
  element,
  formData,
  setFormData,
}) {

  function handleData(id, field, value) {
    const newEducation = formData.education.map((element) => {
      if (element.id === id) {
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
      education: newEducation
    })
    console.log(formData.education);
  }

  return (
    <form className="education-form">
      <div className="input-data">
        <label htmlFor="school-name">School name</label>
        <input
          onChange={(e) => handleData(id, "name", e.target.value)}
          id="school-name"
          value={element.name}
          placeholder="Name"
          autoComplete="on"
          type="text"
        />
      </div>
      <div className="input-data">
        <label htmlFor="degree">Degree</label>
        <input
          onChange={(e) => handleData(id, "degree", e.target.value)}
          id="degree"
          value={element.degree}
          placeholder="Title of Study"
          autoComplete="on"
          type="text"
        />
      </div>
      <div className="input-data">
        <label htmlFor="start-date">Start date</label>
        <input
          onChange={(e) => handleData(id, "startDate", e.target.value)}
          id="start-date"
          value={element.startDate}
          placeholder="Name"
          autoComplete="on"
          type="date"
        />
      </div>
      <div className="input-data">
        <label htmlFor="end-date">End date</label>
        <input
          onChange={(e) => handleData(id, "endDate", e.target.value)}
          id="end-date"
          value={element.endDate}
          placeholder="Name"
          autoComplete="on"
          type="date"
        />
      </div>
    </form>
  );
}
