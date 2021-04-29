import React from "react";

const Level = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onSelectDifficulty(event.target.value);
  };

  return (
    <div className="row justify-content-center">
      <form>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="difficultyLevel">
                Level of difficulty
              </label>
            </div>
            <select
              className="form-control"
              id="difficultyLevel"
              value={props.selected}
              onChange={dropdownChangeHandler}
            >
              <option value="">--choose--</option>
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Level;
