import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Authpage = () => {
  return (
    <>
      {/* <div>Login</div> */}
      <div className='vh-100 d-flex'>
        
        <div className='d-flex flex-column h-100' style={{width : '35%'}}>
          <div className='d-flex justify-content-center' style={{height: '40%'}}>
            <h1 className='text-center text-danger p-4'>TUSU RED ALERT</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <form className='p-4 w-75'>
              <h2 className='text-center m-3'>เข้าสู่ระบบ</h2>
              <div className="form-outline mb-2">
              <label className="form-label" for="form2Example1">อีเมลล์</label>
                <input type="email" id="form2Example1" placeholder="อีเมลล์" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2">รหัสผ่าน</label>
                <input type="password" id="form2Example2" placeholder="รหัสผ่าน" className="form-control" />
              </div>
              <div className='d-flex flex-column justify-content-center'>          
                <Link to='/dashboard' type="button" className="btn btn-danger mt-4 btn-block form-control"><h5>ไปทำงานกัน</h5></Link>
                <p className='text-center text-secondary'>- PEDT -</p>
              </div>
            </form>
          </div>
        </div>

        <div className="right-component" style={{width : '65%', position: 'relative'}}>
          <div className='light-modal-overlay'></div>
        </div> 
      </div>
    </>
  )
}

export default Authpage