import DesImg1 from "../assests/1.jpg";
import DesImg2 from "../assests/2.jpg";
import DesImg3 from "../assests/3.jpg";
import DesImg4 from "../assests/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunities</p>

      <DestinationData className="first-des"
        heading="Taat Volcano"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum."
        img1={DesImg1}
        img2={DesImg2}
      />

      <DestinationData className="first-des-reverse"
        heading="Mount Volcano"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum."
        img1={DesImg3}
        img2={DesImg4}
      />
    </div>
  );
};

export default Destination;
