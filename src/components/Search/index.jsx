import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import { setSeachValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSeachValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      dispatch(setSeachValue(value));
    }, 350),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.main}
        placeholder="Search..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};
export default Search;
