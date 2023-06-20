import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "bootstrap";
import "../styles/seller.scss";

export const SellerView = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalInstance, setModalInstance] = useState(null);

  const users = [
    { username: "Pepito", amount: 100 },
    { username: "Perez", amount: 200 },
    { username: "Fulanito", amount: 300 },
    { username: "Rebeca", amount: 400 },
  ];

  useEffect(() => {
    setModalInstance(new Modal(document.getElementById("userModal")));
  }, []);

  useEffect(() => {
    if (selectedUser && modalInstance) {
      modalInstance.show();
    }
  }, [selectedUser, modalInstance]);

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    if (modalInstance) {
      modalInstance.hide();
    }
    setSelectedUser(null);
  };
  return (
    <div className="container">
      <div>
        <h3>
          Usuario <span className="text-dark">Magnolia</span>
        </h3>
      </div>
      <h3>Morosos</h3>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-12 col-md-3 mb-2" key={index}>
            <div className="card" onClick={() => handleCardClick(user)}>
              <div className="card-body row">
                <div className="col-6">
                  <h5 className="card-title">{user.username}</h5>{" "}
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <p className="card-text">${user.amount}</p>
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="modal " id="userModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedUser?.username}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleModalClose}
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-end">
              <p className="text-dark">${selectedUser?.amount}</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="modal-footer col-5">
                <button
                  type="button"
                  className="btn btn-secondary boxShadow"
                  onClick={handleModalClose}
                >
                  Ya pagó
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
