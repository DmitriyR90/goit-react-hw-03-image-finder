import { Component } from 'react';
import { Field, Form, Formik } from 'formik';

export class Searchbar extends Component {
  handleSubmit = (values, actions) => {
    this.props.onSearch(values.searchField);
    actions.resetForm();
  };

  render() {
    return (
      <header>
        <Formik
          initialValues={{ searchField: '' }}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <button type="submit">
              <span>Search</span>
            </button>

            <Field
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchField"
            />
          </Form>
        </Formik>
      </header>
    );
  }
}
