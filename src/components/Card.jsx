import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">some important text</p>
          <div className="conatiner w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(16), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
