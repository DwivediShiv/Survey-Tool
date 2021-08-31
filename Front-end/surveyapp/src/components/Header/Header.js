import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const showType = useSelector((state) => state.type.stateType);

  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        {showType !== "ProceedClicked" && (
          <Link to="/" className={classes.logo}>
            Survey<span>Tool</span>
          </Link>
        )}
        <nav>
          <ul>
            <li>
              {showType !== "ProceedClicked" && (
                <Link to="/Results" className={classes.link}>
                  Survey Results
                </Link>
              )}
            </li>
            <li>
              {showType !== "ProceedClicked" && (
                <Link to="/indresults" className={classes.link}>
                  Individual Result
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
