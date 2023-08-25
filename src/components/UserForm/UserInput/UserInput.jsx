import css from './UserInput.module.css';


export const UserInput = ({ text, name, type, isActive, onChange, value, error, helperText }) => {
    return (
        <div>
          <label className={css.label}>
                <span className={css.labelText}>{text}:</span>
                <input className={css.input} name={name} type={type} disabled={isActive} onChange={onChange} value={value}/>
           
            </label>
             {error ? (
                <span className={css.errorText}>{helperText}</span>
       ) : null}
        </div>
    )
}