export default props => {
  const style = {
    background: props.imgLink,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }
  return (
    <div className="card">
      <div className="image" style={style}></div>
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}
