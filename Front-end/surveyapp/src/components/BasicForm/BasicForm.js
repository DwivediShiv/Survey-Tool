import { Fragment, useRef, useState } from "react";
import classes from "./BasicForm.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { useHistory } from "react-router";
import { typeActions } from "../../store/showType";

const BasicForm = () => {
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    if (nameValue) {
      setErrorName(false);
    }
    if (emailValue) {
      setErrorEmail(false);
    }

    fetch("http://localhost:8080/entry/user-details", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        name: nameValue,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data.errorData) {
          data.errorData.map((item) => {
            if (item.param == "email") {
              setErrorEmail(true);
            }
            if (item.param == "name") {
              setErrorName(true);
            }
            alert(item.msg);
          });
        } else {
          dispatch(userActions.setUserId(data.userId));
          dispatch(typeActions.proceedClicked());
          history.push("/questions");
          //State change question start
        }
      })
      .catch((err) => {
        console.log("errors", err);
      });
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Please tell us brief about yourself</h2>
        <form>
          <label htmlFor="name" title="Name">
            Name
          </label>
          <input
            className={`${classes.input} ${errorName ? classes.invalid : ""}`}
            ref={nameInputRef}
            id="name"
            name="name"
            type="text"
            required
          />

          <label htmlFor="email" title="email">
            Email
          </label>
          <input
            ref={emailInputRef}
            className={`${classes.input} ${errorEmail ? classes.invalid : ""}`}
            id="email"
            name="email"
            type="email"
            required
          />

          <input
            className={classes.btn}
            id="name"
            value="Proceed"
            type="submit"
            onClick={onSubmitHandler}
          />
        </form>
      </div>
    </Fragment>
  );
};

export default BasicForm;
