import React from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header";

const TransactionHistory = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <div className="ms-Tabs">
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link to="/payrent-other-details" class="btn  ms-group-btn ">
              New Transaction
            </Link>
            <Link
              to="/payrent-transaction-history"
              class="btn  ms-group-btn active-btn "
            >
              Transaction History
            </Link>
          </div>
        </div>
        <form>
          <div className="Home-contact-form">
            <h4 className="form-heading ">Pending Transaction</h4>
            <div className="form-block">
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnfailure">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnfailure">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>

              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnfailure">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Home-contact-form mt-4">
            <h4 className="form-heading ">Completed Transaction</h4>
            <div className="form-block">
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnSuccess">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnSuccess">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>

              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnSuccess">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Home-contact-form mt-4">
            <h4 className="form-heading ">Cancelled Transaction</h4>
            <div className="form-block">
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnNormal">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnNormal">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>

              <div className="transaction-details">
                <div>
                  <p className="trasaction-name">Syed Nouman</p>
                  <p className="trasaction-subh">24 Oct at 11:12 am</p>
                </div>
                <div>
                  <p className="txnNormal">₹50,000</p>
                  <p className="trasaction-subh">Trxn ID</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionHistory;
