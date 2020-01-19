import React from "react";
import FirebaseContext from "../../firebase/context";

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext);
  const [resetPasswordEmail, setResetPasswordEmail] = React.useState("");
  const [isPasswordReset, setIsPassowordReset] = React.useState(false);
  const [passwordResetError, setPasswordResetError] = React.useState(null);

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
      setIsPassowordReset(true);
      setPasswordResetError(null);
    } catch (error) {
      console.log("Error sending email", error);
      setPasswordResetError(error.message);
      setIsPassowordReset(false);
    }
  }

  return (
    <div>
      <input
        type='email'
        className='input'
        placeholder='Provide your account email'
        onChange={event => setResetPasswordEmail(event.target.value)}
      />
      <div>
        <button className='button' onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
      {isPasswordReset && <p>Check email to reset password</p>}
      {passwordResetError && <p className='error-text'>{passwordResetError}</p>}
    </div>
  );
}

export default ForgotPassword;
