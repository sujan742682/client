import PropTypes from 'prop-types';
const FormRow = ({type,name,labelText,defaultValue}) => {
  return (
    <div>
        <label htmlFor={name} className="form-label">
            {labelText || name}
        </label>
        <input
            type={type}
            name={name}
            className="form-control" 
            id={name}
            defaultValue={defaultValue || ''}
        />
    </div>
  )
}
// Prop validation
FormRow.propTypes = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept string or number for 'type'
    name: PropTypes.string.isRequired, // 'name' must be a string and is required
    labelText: PropTypes.string,       // 'labelText' is optional and must be a string
    defaultValue: PropTypes.string    // 'defaultValue' is optional and must be a string
  };
export default FormRow