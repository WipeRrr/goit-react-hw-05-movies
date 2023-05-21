import PropTypes from 'prop-types';
import css from './SearchForm.module.css'
export default function SearchForm({ onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input className={css.input}
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
      ></input>
      <button className={css.btn} type="submit">Find Movies</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
