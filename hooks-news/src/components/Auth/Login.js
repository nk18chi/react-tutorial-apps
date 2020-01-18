import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
import firebase from "../../firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = React.useState(true);
  const [firebaseError, setFirebaseError] = React.useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/");
    } catch (error) {
      console.log("authentication Error", error);
      setFirebaseError(error.message);
    }
  }

  return (
    <div>
      <h2 className='mv3'>{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className='flex flex-column'>
        {!login && (
          <input
            onChange={handleChange}
            value={values.name}
            name='name'
            type='text'
            placeholder='your name'
            autoComplete='off'
          />
        )}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name='email'
          type='email'
          className={errors.email && "error-input"}
          placeholder='your email'
          autoComplete='off'
        />
        {errors.email && <p className='error-Text'>{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name='password'
          type='password'
          className={errors.password && "error-input"}
          placeholder='Choose a secure password'
        />
        {errors.password && <p className='error-Text'>{errors.password}</p>}
        {firebaseError && <p className='error-text'>{firebaseError}</p>}
        <div className='flex mt3'>
          <button
            type='submit'
            className='button pointer mr2'
            disable={isSubmitting.toString()}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            Submit
          </button>
          <button
            type='button'
            className='pointer button'
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "need to create an account?" : "already have an annount?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
