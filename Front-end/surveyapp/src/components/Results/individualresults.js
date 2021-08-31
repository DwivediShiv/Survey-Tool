import { useEffect, useState } from "react";
import classes from "./individualresults.module.css";

const IndividualResult = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/show/surveyDetails")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data.surveyDetails);
      });
  }, []);

  const detailsList = details.map((item) => {
    if (
      !item.country ||
      !item.dish ||
      !item.movie ||
      !item.car ||
      !item.tvSeries
    ) {
      return;
    }
    return (
      <div className={classes.cardContainer}>
        <h4>{item.name}</h4>
        <h5>{item.email}</h5>
        <li>Country : {item.country}</li>
        <li>Dish: {item.dish}</li>
        <li>Movie: {item.movie}</li>
        <li>Car: {item.car}</li>
        <li>Tv Series: {item.tvSeries}</li>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <ul>{detailsList}</ul>
    </div>
  );
};

export default IndividualResult;
