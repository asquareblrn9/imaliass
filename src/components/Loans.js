import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { toast } from 'react-toastify'

const Loans = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [amount, setAmount]=useState('')

  const addLoan = () => {
    
      if(amount === ''){
        handleClose()
          toast.warning("You cannot borrow empty value")
      }else if(amount === '5000'){
            handleClose()
              toast.error("failed")
          }else{
            handleClose()
              toast.success("success")
          }
      }

  


  return (
    <>
    <div className="container mb-5 mt-5">
        <div className='row mt-5'>
            <div className='offset-md-2 col-md-8'>
                <div className='row'>
        <h3 className='text-white text-center mt-5 mb-5'>Pick your Loan Choice and get Started</h3>
    <div className='col-md-6 col-sm-12 col-lg-6'>
    <div className="card card-pricing popular shadow text-center px-3 mb-4"> <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Product A</span>
           
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                    <li>Max allowable limit 10000</li>
                    <li>interest percentage 10%</li>
                    <li>tenure 15 days</li>
                    
                </ul> 
                <Button variant="primary" onClick={handleShow}>
        Borrow Now
      </Button>
            </div>
        </div>
        </div>
        
        <div className='col-md-6 col-sm-12 col-lg-6'>
        <div className="card card-pricing popular shadow text-center px-3 mb-4"> <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Product B</span>
            
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                    <li>Max allowable limit 25000,</li>
                    <li>interest percentage 12.5%,</li>
                    <li>tenure 30 days</li>
                   
                </ul> 
                <Button variant="primary" onClick={handleShow}>
        Borrow Now
      </Button>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>

    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How Much are you borrowing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <input type="number" className="form-control" onChange={(e) => {
                  setAmount(e.target.value)
                }} placeholder="Enter the amount you want to borrow" name="amount" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addLoan}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

   
    </>
  )
}

export default Loans