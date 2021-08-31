import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Questions.module.css";
import { Prompt, useHistory } from "react-router";
import { typeActions } from "../../store/showType";

const Questions = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [entered, setEntered] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const [answers] = useState({});
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  // let questions;

  useEffect(() => {
    let loadedQuestions;
    setIsloading(true);
    fetch("http://localhost:8080/questions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loadedQuestions = data.data;
        setQuestions(loadedQuestions);
        setIsloading(false);
      });
  }, []);

  const onChangeHandler = (e) => {
    let type = e.target.name;
    answers[type] = e.target.value;
  };

  const onSubmitHandler = () => {
    fetch(`http://localhost:8080/entry/survey-entry/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        movie: answers.Movie,
        tvSeries: answers.TvSeries,
        dish: answers.Dish,
        country: answers.Country,
        car: answers.Car,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        dispatch(typeActions.finishClicked());
        setEntered(false);
        history.push("/Results");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const questionList = questions.map((item) => {
    return (
      <div className={classes.questionCard}>
        <h3>{item.ques}</h3>
        <div className={classes.inputDiv}>
          <div>
            <input
              type="radio"
              name={item.type}
              value={`option1-${item.option1}`}
              onChange={onChangeHandler}
            />
            {item.option1}
          </div>
        </div>
        <div className={classes.inputDiv}>
          <input
            type="radio"
            name={item.type}
            value={`option2-${item.option2}`}
            onChange={onChangeHandler}
          />
          {item.option2}
        </div>
        <div className={classes.inputDiv}>
          <input
            type="radio"
            name={item.type}
            value={`option3-${item.option3}`}
            onChange={onChangeHandler}
          />
          {item.option3}
        </div>
        <div className={classes.inputDiv}>
          <input
            type="radio"
            name={item.type}
            value={`option4-${item.option4}`}
            onChange={onChangeHandler}
          />
          {item.option4}
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <Prompt
        when={entered}
        message={(location) => {
          "Are you sure you want to leave? All entered data will be lost! ";
        }}
      />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {questionList}
          <div className={classes.btnContainer}>
            <input
              className={classes.btn}
              type="submit"
              value="Finish"
              onClick={onSubmitHandler}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Questions;
