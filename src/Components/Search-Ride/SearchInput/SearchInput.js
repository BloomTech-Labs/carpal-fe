import React from 'react';
import { withFormik, Form, Field }  from 'formik'

function SearchInput(props) {
    return (
        <div className='search-ride-input'> 
            <Form>
                <Field 
                    className="formik-search-fields"
                    type='text'
                    name='pickup'
                    placeholder= 'Pick up...'
                />
                <Field 
                    className="formik-search-fields"
                    type='text'
                    name='dropof'
                    placeholder= 'Destination...'
                />
            </Form>
        </div>
    )
}

const SearchInputFormik = withFormik({
    mapPropsToValues: (values) => ({
        pickup: values.pickup || '',
        dropof: values.dropof || '',
    }),

    handleSubmit: (values) => {
        console.log(values)
    }
})(SearchInput);
export default SearchInputFormik
