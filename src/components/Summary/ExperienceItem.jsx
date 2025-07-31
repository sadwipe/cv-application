export default function ExperienceItem({ element }) {
  return (
    <div>
      <div className='experience-header'>
        <div className='company-name'>
          <h3>
            {element.title.length > 0 &&
              element.company.length > 0 &&
              element.title + ', ' + element.company}
          </h3>
        </div>
        <div className='date'>
          <p className='education-date'>
            {element.startDate.length > 0 &&
              element.endDate.length > 0 &&
              element.startDate + ' - ' + element.endDate}
          </p>
        </div>
      </div>
      <ul className='summary-experience-tasks'>
        {element.responsibilities.map((res) => (
          <li key={res.id}>{res.task}</li>
        ))}
      </ul>
    </div>
  );
}
