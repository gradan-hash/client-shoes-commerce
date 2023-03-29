import axios from "axios";
import React, { useEffect, useState } from "react";
import { AllproductRoute, buildingRoute } from "../../api/api";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./p.scss";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function AllProducts() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(18);
  const { param } = useParams();

  useEffect(() => {
    const getProductss = async () => {
      try {
        setLoading(true);
        const res = await axios.get(AllproductRoute);

        const ptype = res.data.products.filter(
          (product) => product.type === param
        );
        console.log(ptype);
        setProperties(ptype);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    getProductss();
  }, [param]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = properties.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(properties.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />
      <div className="bedrooms-container">
        <div className="headers">
          <h2 className="sale">{param} products </h2>
        </div>

        <div className="bedrooms">
          {loading ? (
            <p>loading</p>
          ) : (
            currentProducts.map((m) => (
              <div className="bedroomsitems" key={m._id}>
                <Link
                  to={`/product/${m._id}`}
                  style={{ textDecoration: "none" }}>
                  <div className="img">
                    <img src={m.img} alt="" />
                  </div>

                  <div className="bedroomsfooter">
                    <h2 className="bedroomsname">{m.name}</h2>
                    <h4 className="category">{m.category}</h4>
                    <h4 className="bedroomslocation">{m.type}</h4>
                    <h4 className="bedroomslocation">{m.size}</h4>

                    <h4 className="bedroomsprice">usd: ${m.price}</h4>
                    <h2 className="viewdeal">Addtocart</h2>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <span
              key={number}
              className={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}>
              {number}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
