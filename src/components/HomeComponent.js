import React from "react";

function Home(props) {
  const infoArray = props.infoArray;

  const haveKey = infoArray.filter((info) => info.name === "haveKey")[0];
  console.log("haveKey", haveKey);

  const haveMotion = infoArray.filter((info) => info.name === "haveMotion")[0];
  console.log("haveMotion", haveMotion);

  if (haveKey && haveMotion) {
    const welcomHome = haveKey.value && haveMotion.value;
    if (welcomHome) {
      return (
        <div className="container">
          <h4>Welcome home!</h4>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h4>Call the police</h4>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <h4>haveKey or haveMotion are undefined</h4>
    </div>
  );
}

export default Home;
