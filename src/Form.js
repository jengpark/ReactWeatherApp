import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type city here"
            autofocus="on"
            className="form-control"
            id="city-input"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control button w-100 mb-3"
          />
        </div>
      </div>
    </form>
  );
}
