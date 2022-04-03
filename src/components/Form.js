import React from 'react'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Form = () => {
    const navigate = useNavigate()
    const [phone, setPhone]=useState('')
    const addPhone = () => {
    
        if(phone === ''){
            toast.warning("Fill your phone number")
        }else {
            toast.success("Login Successful");
            navigate('/loan', { replace: true });
        }
            
        }
  return (
    <>
    <div className="form-body" style={{ backgroundColor:"#152733", overflow:"hidden" }}>
    <div className="row">
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Welcome to Imali Loan</h3>
                    <p>Login with your phone number to get started</p>
                    <form>

                        <div className="col-md-12 mb-3">
                            <input className="form-control" type="text" onChange={(e) => {
                  setPhone(e.target.value)}} name="phone" placeholder="Phone Number"  />
                            
                        </div>                             

                        <Button variant="primary"  onClick={addPhone}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Form