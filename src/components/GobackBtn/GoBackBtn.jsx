import { useNavigate } from 'react-router-dom';
import css from './GobackBtn.module.css';

export default function GoBackBtn() {
  let navigate = useNavigate();
  return (
    <>
      <button className={css.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}
