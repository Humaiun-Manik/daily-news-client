import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h1>Here is our terms and conditions.</h1>
      <h5>
        Go back to: <Link to={"/register"}>Register</Link>
      </h5>
    </div>
  );
};

export default TermsAndConditions;
