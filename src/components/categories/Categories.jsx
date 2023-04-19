import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
import menshoes from "../../img/menshoes.jpg";
import jordans from "../../img/jordans.jpg";
import womenshoes from "../../img/womenshoes.jpg";
import menshoes1 from "../../img/mennshoes1.jpg";
import max97 from "../../img/maxx97.jpg";
function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={menshoes} alt="" />
          <button>
            <Link to="/products/men" className="link">
              Top Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={womenshoes} alt="" />
          <button>
            <Link to="/products/women" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={jordans} alt="" />
          <button>
            <Link to="/products/men" className="link">
              Jordans
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={menshoes1} alt="" />
              <button>
                <Link to="/products/men" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={max97} alt="" />
              <button>
                <Link to="/products/both" className="link">
                  Air Max
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img
            src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/women" className="link">
              Airforce's
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
