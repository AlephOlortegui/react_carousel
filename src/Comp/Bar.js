const Bar = ({count, len}) => {
    let progress = `${(100/(len-1))*(count)}%`
  return (
    <div className="bar">
        <div className="progress" 
        style={{width: progress}}></div>
    </div>
  )
}

export default Bar