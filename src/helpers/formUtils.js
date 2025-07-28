export function addEducation(formData) {
  const newObject = {
    id: formData.education.length,
    name: "",
    degree: "",
    startDate: "",
    endDate: ""
  }
  return {...formData,
    education: [
      ...formData.education,
      newObject
    ]
  }
}

export function removeEducation(formData, educationId) {
  return {
    ...formData,
    education: formData.education.filter(element => element.id !== educationId)
  }
}
