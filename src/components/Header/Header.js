import React from "react";

const styles = {
  jumbotron: {
    textAlign: "center",
    background: "#824dea"
  }
}

const Jumbotron = () => {
  return (
    <div className="jumbotron" style={styles.jumbotron}>
      <h1>ACME IT Consulting, Inc.</h1>
      <h3>Employee List</h3>
    </div>
  );
}

export default Jumbotron;
