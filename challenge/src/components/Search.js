import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className=" container bg-search">
        <form className="bg-form ">
          <h5 className="pt-5 mx-3 pb-3">Find a rental property</h5>
          {/* search area */}
          <div className="row mb-3">
            <div className="col-12 form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                defaultValue="eg. Oxford or NW3"
                disabled
              />
              <label htmlFor="floatingInputValue">Search Area</label>
            </div>
          </div>

          {/* beds */}
          <div className="row mb-3">
            <div className="col-6 form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                disabled
              >
                <option defaultValue>No min</option>
              </select>
              <label htmlFor="floatingSelect">Minimum beds</label>
            </div>
            <div className="col-6 form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                disabled
              >
                <option defaultValue>No max</option>
              </select>
              <label htmlFor="floatingSelect">Maximum beds</label>
            </div>
          </div>

          {/* price per month */}
          <div className="row mb-3">
            <div className="col-12 form-floating ">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                disabled
              >
                <option defaultValue>Month</option>
              </select>
              <label htmlFor="floatingSelect">Price per</label>
            </div>
          </div>

          {/* price */}
          <div className="row">
            <div className="col-6 form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                disabled
              >
                <option defaultValue>No min</option>
              </select>
              <label htmlFor="floatingSelect">Minimum price</label>
            </div>
            <div className="col-6 form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                disabled
              >
                <option defaultValue>No max</option>
              </select>
              <label htmlFor="floatingSelect">Maximum price</label>
            </div>
          </div>

          {/* Search */}
          <div className="text-center">
            <button type="button" className="mt-3 search-button">
              FIND PROPERTIES
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
