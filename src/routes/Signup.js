import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/3.jpg";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <>
      <Navbar/>
      <Hero cName=".hero-mid" heroImg={AboutImg} title="Sign UP" />
      <SignupForm />
      <Footer />
    </>
  );
}

export default Signup;
