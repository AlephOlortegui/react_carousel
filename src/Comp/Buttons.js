const Button = ({disabled, icon, handleClick}) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
        <i className={`fas ${icon}`}></i>
    </button>
  )
}


export default Button