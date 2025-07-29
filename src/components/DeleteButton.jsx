import removeIcon from '../assets/images/remove.svg';
import '../styles/Button.css';

export default function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className='add-button'>
      <img src={removeIcon} alt='Add Education Image' />
      <span>Delete</span>
    </button>
  );
}
