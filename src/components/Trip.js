import "./TripStyles.css";
import TripData from "./TripData";
import DesImg1 from "../assests/1.jpg";
import DesImg2 from "../assests/2.jpg";
import DesImg3 from "../assests/3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You discover uniq destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={DesImg1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TripData
          image={DesImg2}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TripData
          image={DesImg3}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default Trip;
