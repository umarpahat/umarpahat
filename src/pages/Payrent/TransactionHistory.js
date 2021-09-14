import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Cookies from 'universal-cookie';
import { Container } from "react-bootstrap";
import tip from "../../images/svg/tip.png";
const cookies = new Cookies()
const TransactionHistory = (props) => {
  const token = cookies.get('token')

  const [successTrans, setsuccessTrans] = useState([])
  const [failedTrans, setfailedTrans] = useState([])
  const [pendingTrans, setpendingTrans] = useState([])

  useEffect(()=>{
    if (!token) {
      props.history.push({pathname: '/'})
    }
    console.log("opopopopo",props)
    console.log(props.location.state.transactionHistory)
    props.location.state.transactionHistory?.forEach(element => {
    console.log(">>>>>", element)
    if (element.payee.txn_status_code === "Failed") {
    setfailedTrans(failedTrans => [...failedTrans, element])
    }else if (element.payee.txn_status_code === "Success") {
    setsuccessTrans(successTrans => [...successTrans, element])
    }if(element.payee.txn_status_code === "In Process") {
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
      <Container>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <br/>
          <a className='back-arrow' href=''>Back</a>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 text-center">
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
          <div className="home-contact-form">
            <h4 className="form-heading ">Pending Transaction</h4>
            <div className="form-block">
           {(PensindTransTrack.length===0)?<span>No Pending Transaction</span>:null}
              {PensindTransTrack}
            </div>
          </div>
          <div className="home-contact-form mt-4">
            <h4 className="form-heading ">Completed Transaction</h4>
            <div className="form-block">
            {(SuccessTransTrack.length===0)?<span>No Success Transaction</span>:null}
              {SuccessTransTrack}
            </div>
          </div>
          <div className="home-contact-form mt-4">
            <h4 className="form-heading ">Cancelled Transaction</h4>
            <div className="form-block">
            {(failedTRanstrack.length===0)?<span>No Failed Transaction</span>:null}
              {failedTRanstrack}
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="col-lg-5 col-md-5 col-sm-12 text-center">
      <div className='height100'>
        <div>
          <div className='circle-half'>
            <div className='full-circle'>
              <img src={tip} alt='Icon'/>
            </div>
            <div className='full-text text-left'>
              <h5>Tips</h5>
              <p>In expedita et occaecati ullam a cumque maiores perspiciatis. Non labore exercitationem
                rerum nulla ea veniam facilis et. </p>
            </div>
          </div>
          <div className='circle-half'>
            <p className='p-a-10'>In expedita et occaecati ullam a cumque maiores perspiciatis. </p>
          </div>
        </div>
      </div>
    </div>
      </div>
      </Container>
    </div>
    </>
  );
};

export default TransactionHistory;
