import React from "react";

const styles = {
  jumbotron: {
    textAlign: "center",
    background: "#7E57C2"
  }
}

const Header = () => {
  return (
    <div className="jumbotron" style={styles.jumbotron}>
      <h1>ACME IT Consulting, Inc.</h1>
      <h3>Employee List</h3>
    </div>
  );
}

export default Header;
