import { v4 as uuidv4 } from 'uuid';

export function addEducation(formData) {
  const newObject = {
    id: uuidv4(),
    name: '',
    degree: '',
    startDate: '',
    endDate: '',
  };
  return {
    ...formData,
    education: [...formData.education, newObject],
  };
}

export function removeEducation(formData, educationId) {
  return {
    ...formData,
    education: formData.education.filter(
      (element) => element.id !== educationId,
    ),
  };
}

export function removeExperience(formData, experienceId) {
  return {
    ...formData,
    experience: formData.experience.filter(
      (element) => element.id !== experienceId,
    ),
  };
}

export function addExperience(formData) {
  const newObject = {
    id: uuidv4(),
    title: '',
    company: '',
    responsibilities: [],
    startDate: '',
    endDate: '',
  };

  return {
    ...formData,
    experience: [...formData.experience, newObject],
  };
}

export function addResponsibility(formData, elementId) {
  const newExperience = formData.experience.map((element) => {
    if (element.id === elementId) {
      return {
        ...element,
        responsibilities: [
          ...element.responsibilities,
          {
            id: uuidv4(),
            task: '',
          },
        ],
      };
    } else {
      return element;
    }
  });
  return {
    ...formData,
    experience: newExperience,
  };
}

export function removeResponsibility(formData, experienceId, resId) {
  const newExperience = formData.experience.map((exp) => {
    if (exp.id === experienceId) {
      return {
        ...exp,
        responsibilities: exp.responsibilities.filter(
          (res) => res.id !== resId,
        ),
      };
    } else {
      return exp;
    }
  });

  return {
    ...formData,
    experience: newExperience,
  };
}
