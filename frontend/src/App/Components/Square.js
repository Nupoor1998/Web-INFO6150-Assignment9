import React from "react";

class Square extends React.Component {
  render() {
    var squareStyle = {
      height: 50,
      backgroundColor: this.props.color,
    };

    return (
      <div style={squareStyle}>
        For further details reach out to the below details <br />
        <a href="mailto:korde.n@northeastern.edu">korde.n@northeastern.edu</a>  
        <br />
        <a href="tel:857-123-1234">857-123-1234</a>
      </div>
    );
  }
}

export default Square;
