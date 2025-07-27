import "../styles/PersonalForm.css";

export default function PersonalForm({ formData, setFormData, section }) {

  function handleChange(field, value) {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    })
  }

  return (
    <form id="personal-form">
      <div className="input-data">
        <label htmlFor="full-name">Full Name</label>
        <input
          onChange={(e) => handleChange("fullName", e.target.value)}
          type="text"
          id="full-name"
          value={formData.personal.fullName}
          placeholder="Full name"
        />
      </div>
      <div className="input-data">
        <label htmlFor="email">E-mail</label>
        <input
          onChange={(e) => handleChange("email", e.target.value)}
          type="email"
          id="email"
          value={formData.personal.email}
          placeholder="E-mail"
          autoComplete="on"
        />
      </div>
      <div className="input-data">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          onChange={(e) => handleChange("phone", e.target.value)}
          type="tel"
          id="phone"
          value={formData.personal.phone}
          placeholder="Phone number"
        />
      </div>
      <div className="input-data">
        <label htmlFor="photo">Photo</label>
        <input
          onChange={(e) => handleChange("email", e.target.value)}
          type="email"
          id="email"
          value={formData.personal.email}
          placeholder="E-mail"
          autoComplete="on"
        />
      </div>
      <div className="input-data">
        <label htmlFor="summary">Summary</label>
        <textarea
          onChange={(e) => handleChange("summary", e.target.value)}
          name="summary"
          id="summary"
          value={formData.personal.summary}
          placeholder="Summary"
        ></textarea>
      </div>
    </form>
  );
}
