import { Component } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';

class Searcbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    searchbar: "",
  };
  submit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.searchbar);
    this.reset();
  };
  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ searchbar: "" });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.submit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            name="searchbar"
            value={this.state.searchbar}
            onChange={this.inputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searcbar;