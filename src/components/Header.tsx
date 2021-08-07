import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import {
  // orderTodo,
  orderRandomDateAsc,
  orderRandomDateDes,
} from "../redux/todoSlice";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  // Row Ascending/Descending Order Function() using reverse()
  // const handleDesc = () => {
  //   dispatch(orderTodo());
  // };

  // End Date Ascending Order Function()
  const handleRandomAsc = () => {
    dispatch(orderRandomDateAsc());
    setIsVisible(false);
  };

  // End Date Descending Order Function()
  const handleRandomDesc = () => {
    dispatch(orderRandomDateDes());
    setIsVisible(true);
  };

  return (
    <div className="grid grid-flow-col grid-cols-2 my-5">
      <div className="my-auto mr-auto">
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "25px",
            background: "DodgerBlue",
            textTransform: "capitalize",
            fontWeight: 700,
          }}
        >
          Create
        </Button>
      </div>
      <div className="my-auto ml-auto">
        {isVisible === true ? (
          <IconButton
            aria-label="ArrowUp"
            className="bg-white shadow-lg"
            onClick={handleRandomAsc}
          >
            <IoMdArrowRoundUp size="25" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="ArrowDown"
            className="bg-white shadow-lg"
            onClick={handleRandomDesc}
          >
            <IoMdArrowRoundDown size="25" />
          </IconButton>
        )}
      </div>
    </div>
  );
};
