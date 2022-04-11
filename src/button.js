export var Button = (props) => {
  return (
    <button
      style={{
        height: 30,
        borderRadius: 0,
        backgroundColor: '#ddd',
      }}
      onClick={() => {
        props.onClick()
      }}
    >
      {props.text}
    </button>
  )
}
