export const UserInput = ({text, name, type, isActive, onChange, value, error, helperText}) => {
    return (
        <>
          <label>
                <p>{text}:</p>
                <input name={name} type={type} disabled={isActive} onChange={onChange} value={value}/>
            </label>
             {error ? (
         <div>{helperText}</div>
       ) : null}
        </>
    )
}