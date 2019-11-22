import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError = ({ error, touched }) =>  {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }


    renderInput = ({ input, label, meta })  => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
                {/* <div>{meta.error}</div> */}
                {/* // takes all the properties out theere and adds them here */}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description " />
                <button className="ui button primary">Submit</button>
                {/* A field can be text-input, dropdown, radio-button, checkbox */}
            </form>);
    }
};

const validate = (formValues) => {    // we get the eror message, if the field name is same  as error field name
    // connection between renderInput and validate function is the same field names (title, description)
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};


export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
 