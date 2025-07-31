export default function EducationItem({ element }) {
  return (
    <div>
      <h3>
        {element.degree.length > 0 &&
          element.name.length > 0 &&
          element.degree + ', ' + element.name}
      </h3>
      <p className='education-date'>
        {element.startDate.length > 0 &&
          element.endDate.length > 0 &&
          element.startDate + ' - ' + element.endDate}
      </p>
    </div>
  );
}
