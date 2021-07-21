import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
const TransactionHistory = (props) => {

  const [successTrans, setsuccessTrans] = useState([])
  const [failedTrans, setfailedTrans] = useState([])
  const [pendingTrans, setpendingTrans] = useState([])

  useEffect(()=>{

    console.log("opopopopo")
    console.log(props.location.state.transactionHistory)
    props.location.state.transactionHistory.forEach(element => {
      console.log(">>>>>", element)
      if (element.payee.txn_status_code === "Failed") {
        setfailedTrans(failedTrans => [...failedTrans, element])
      }else if (element.payee.txn_status_code === "Success") {
        setsuccessTrans(successTrans => [...successTrans, element])
      }  if (element.payee.txn_status_code === "In Process") {
        setpendingTrans(pendingTrans => [...pendingTrans, element])
      }
    });

  }, [])

  const PensindTransTrack = pendingTrans.map((value, index)=>(
    <div className="transaction-details" key={index.toString()}>
    <div>
      <p className="trasaction-name">{value.payee.beneficiary.bene_name}</p>
      <p className="trasaction-subh">{Date(value.created_at)}</p>
    </div>
    <div>
      <p className="txnfailure">&#8377;{value.payee.transfer_amount}</p>
      <p className="trasaction-subh">Trxn ID: {value.txn_id}</p>
    </div>
  </div>
  ))

  const SuccessTransTrack = successTrans.map((value, index)=>(
    <div className="transaction-details" key={index.toString()}>
    <div>
      <p className="trasaction-name">{value.payee.beneficiary.bene_name}</p>
      <p className="trasaction-subh">{Date(value.created_at)}</p>
    </div>
    <div>
      <p className="txnfailure">&#8377;{value.payee.transfer_amount}</p>
      <p className="trasaction-subh">Trxn ID: {value.txn_id}</p>
    </div>
  </div>
  ))

  const failedTRanstrack = failedTrans.map((value, index)=>(
    <div className="transaction-details" key={index.toString()}>
    <div>
      <p className="trasaction-name">{value.payee.beneficiary.bene_name}</p>
      <p className="trasaction-subh">{Date(value.created_at)}</p>
    </div>
    <div>
      <p className="txnfailure">&#8377;{value.payee.transfer_amount}</p>
      <p className="trasaction-subh">Trxn ID: {value.txn_id}</p>
    </div>
  </div>
  ))
 

  return (
    <>
    <div className='content darkBg'>
      <Header {...props}/>
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
           {(PensindTransTrack.length===0)?<span>No Pending Transaction</span>:null}
              {PensindTransTrack}
            </div>
          </div>
          <div className="Home-contact-form mt-4">
            <h4 className="form-heading ">Completed Transaction</h4>
            <div className="form-block">
            {(SuccessTransTrack.length===0)?<span>No Success Transaction</span>:null}
              {SuccessTransTrack}
            </div>
          </div>
          <div className="Home-contact-form mt-4">
            <h4 className="form-heading ">Cancelled Transaction</h4>
            <div className="form-block">
              {failedTRanstrack}
            </div>
          </div>
        </form>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default TransactionHistory;
