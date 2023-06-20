import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BuyerViw.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const BuyerView = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  // Función para agregar productos a favoritos
  const addToFavorites = (product) => {
    if (!favorites.find((fav) => fav.id === product.pId)) {
      setFavorites([...favorites, product]);
    }
  };
  // Función para remover productos de favoritos
  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((product) => product.pId !== productId));
  };
  // Función para comprobar si un producto es favorito
  const isFavorite = (productId) => {
    return favorites.some((product) => product.pId === productId);
  };
  return (
    <div className="container">
      <div className="row my-3 d-flex justify-content-between">
        <div className="col-8 d-flex align-items-center ">
          <div className="input-group">
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="form-control px-5 border border-black"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary">
            <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
          </button>
        </div>
      </div>

      {/* Sección para mostrar los favoritos */}
      <div className="row mt-5">
        <h3>Favorites</h3>
        {favorites.map((product) => (
          <div key={product.id} className="col-6 col-md-4 mb-2">
            <div className="card">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row ">
        <h3>Todos</h3>
        {filteredProducts.map((product) => {
          return (
            <div key={product.pId} className="col-6 col-md-4 mb-2">
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                  {/* Botón para agregar/quitar de favoritos */}
                  <button
                    onClick={() =>
                      isFavorite(product.pId)
                        ? removeFromFavorites(product.pId)
                        : addToFavorites(product)
                    }
                    className=" btn-favorites  ml-2"
                  >
                    {/* Cambiamos el ícono dependiendo si el producto es favorito */}
                    <FontAwesomeIcon
                      icon={isFavorite(product.pId) ? fasHeart : farHeart}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
