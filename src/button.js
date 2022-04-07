export var Button = (props) => {
    return (
      <button
        style={{
          width: 20,
          borderRadius: 0,
          backgroundColor: "#ddd",
        }}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </button>
    );
  };