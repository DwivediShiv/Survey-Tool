import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import classes from "./Results.module.css";

const Results = () => {
  const [loadedOptions, setLoadedOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/show/surveyResults")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedOptions(data.surveyResults);
      });
  }, []);

  const labelList = loadedOptions.map((item) => {
    return (
      <div className={classes.barChart}>
        <p>{item.type}</p>
        <Pie
          data={{
            labels: [
              item.option1.name,
              item.option2.name,
              item.option3.name,
              item.option4.name,
            ],
            datasets: [
              {
                label: item.type,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: [
                  item.option1.value,
                  item.option2.value,
                  item.option3.value,
                  item.option4.value,
                ],
              },
            ],
          }}
        />
      </div>
    );
  });

  return <div className={classes.barContainer}>{labelList}</div>;
};

export default Results;
