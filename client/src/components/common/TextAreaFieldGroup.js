<<<<<<< HEAD
import React from 'react' //functional component 
=======
import React from 'react';
>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
<<<<<<< HEAD
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => {
  return (
    <div className = "form-group">
    <textarea 
    className={classnames('form-control form-control-lg', {
      'is-invalid': error
    })}
    placeholder={placeholder}
    name={name}
    value ={value}
    onChange ={onChange}
    /> 
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <div className="invalid-feedback">{error}</div>} 
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
=======
    name,
    placeholder,
    value,
    error,
    info,
    onChange
}) => {
    return (
           <div className="form-group">
                              <textarea  
                              className= { classnames('form-control form-control-lg', {'is-invalid': error})}
                              placeholder={ placeholder } 
                              name={ name }
                              value= { value }
                              onChange={ onChange }
                              />
                              {info && <small className="form-text text-muted">{info}</small>}
                                {error && <div className = "invalid-feedback">{error}</div>}
                            </div>    
    )
}

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
>>>>>>> c2ddcac293ba4a22083a8e97f56c120dbee5f2af
};


export default TextAreaFieldGroup;