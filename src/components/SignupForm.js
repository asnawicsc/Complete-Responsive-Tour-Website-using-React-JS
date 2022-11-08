import "./SignupStyles.css";

function SignupForm() {
  return (
    <div className="from-container">
      <h1>Sign up Now!</h1>
      <form>
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
