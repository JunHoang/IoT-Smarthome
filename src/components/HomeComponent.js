import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Home(props) {
  const infoArray = props.infoArray;

  const haveKey = infoArray.filter((info) => info.name === "haveKey")[0];
  console.log("haveKey", haveKey);

  const haveMotion = infoArray.filter((info) => info.name === "haveMotion")[0];
  console.log("haveMotion", haveMotion);

  const handleNoClick = () => {
    alert("Call A Police!!!!");
  };

  if (haveKey && haveMotion) {
    const welcomHome = haveKey.value && haveMotion.value;
    if (welcomHome) {
      return (
        <div className="flex-container">
          <h1>Welcome home!</h1>
          <div className="row">
            <div className="photo-entry">
              <h5>
                <Link to="/livingroom">Go to Living Room</Link>
              </h5>
              <img
                className="photo-img-home"
                src="https://cdn.clipart.email/94f4a5a4ffc772d740642292ac7e953a_vector-illustration-living-room-living-room-indoor-vector-png-_650-444.jpeg"
              />
            </div>
            <div className="photo-entry">
              <h5>
                <Link to="/bedroom">Go to Bed Room</Link>
              </h5>
              <img
                className="photo-img-home"
                src="https://images.all-free-download.com/images/graphicthumb/bedroom_decoration_drawing_colored_flat_design_6833073.jpg"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Are you home?</h1>
          <div className="container">
            <Button
              className="m-1"
              variant="contained"
              color="primary"
              onClick={() => props.updateKey(haveKey.name)}
            >
              YES
            </Button>
            <Button
              className="m-1"
              variant="contained"
              color="primary"
              onClick={handleNoClick}
            >
              NO
            </Button>
          </div>
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
