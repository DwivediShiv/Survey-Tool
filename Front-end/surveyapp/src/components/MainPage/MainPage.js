import classes from "./MainPage.module.css";
import { useDispatch } from "react-redux";
import { typeActions } from "../../store/showType";
import { useHistory } from "react-router";

const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    history.push("/entry-form");
    dispatch(typeActions.goToSurveyClicked());
  };

  return (
    <div className={classes.container}>
      <h1>Hi, There ! We are happy that you are intersted in our Survey</h1>
      <p>
        We require some basic details before going for Survey. Please click on
        below button
      </p>
      <input
        type="submit"
        className={classes.mainbtn}
        value="Go to Survey"
        onClick={onSubmitHandler}
      />
    </div>
  );
};

export default MainPage;
