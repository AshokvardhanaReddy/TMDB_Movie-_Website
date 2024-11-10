import styles from "../component-modules/MovieTitle.module.css";
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieTitle = ({ subTitle }) => {
  const [showIcon, setShowIcon] = useState(true);
  const navigate = useNavigate();

  const handleShowIconFun = () => {
    setShowIcon((show) => !show);
    navigate("/movies");
  };
  return (
    <>
      <div className={styles.movie_title_container}>
        <p>{subTitle}</p>
        <button className={styles.show_more_arrow} onClick={handleShowIconFun}>
          {showIcon ? <FaLongArrowAltRight /> : <FaLongArrowAltDown />}
        </button>
      </div>
    </>
  );
};
