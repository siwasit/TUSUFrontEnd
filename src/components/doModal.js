import React from 'react'

const DoModal = () => {
  return (
    <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="doTaskdropLabel">รายละเอียดคำร้องเรียน</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
            <div className="form-group">
                <label className="name-label my-1">ชื่อ-สกุล</label>
                <input type="text" className="form-control" placeholder="" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ระดับปีที่กำลังศึกษา</label>
                <select className="form-control" required>
                <option value="" disabled selected>กรุณาเลือกระดับชั้นปี</option>
                <option value="ปริญญาตรี">ปริญญาตรี</option>
                <option value="ปริญญาโท">ปริญญาโท</option>
                <option value="ปริญญาเอก">ปริญญาเอก</option>
                </select>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ศูนย์ที่กำลังศึกษาอยู่</label>
                <select id="gender" className="form-control" required>
                    <option value disabled selected>กรุณาเลือกศูนย์ที่ตั้ง</option>
                    <option value="female">ท่าพระจันทร์</option>
                    <option value="male">ลำปาง</option>
                    <option value="male">รังสิต</option>
                    <option value="male">พัทยา</option>
                </select>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ชั้นปีที่กำลังศึกษา</label>
                <select id="gender" className="form-control" required>
                    <option value disabled selected>กรุณาเลือกชั้นปี</option>
                    <option value="female">ปีที่ 1</option>
                    <option value="male">ปีที่ 2</option>
                    <option value="male">ปีที่ 3</option>
                    <option value="male">ปีที่ 4</option>
                </select>
            </div>
            <div className="form-group">
                <label className="name-label my-1">คณะ/สถาบัน/วิทยาลัย</label>
                <input type="text" className="form-control" placeholder="" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ได้รับความเดือดร้อนเนื่องจาก/รายละเอียดของปัญหา</label>
                <textarea className="form-control" placeholder="ได้รับความเดือดร้อนเนื่องจาก/รายละเอียดของปัญหา" rows="5" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ความต้องการของผู้ร้องเรียน</label>
                <textarea className="form-control" placeholder="ความต้องการของผู้ร้องเรียน" rows="5" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">เรื่อง</label>
                <input type="text" className="form-control" placeholder="ยกตัวอย่าง: ร้องเรียนเรื่องไฟจราจร" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">เรียน</label>
                <input type="text" className="form-control" placeholder="ยกตัวอย่าง: นายสมศักดิ์ ศักดิ์สม" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ตั้งชื่อภาพ</label>
                <a className='mx-2' href="url">link to image</a>
                <input type="text" className="form-control" placeholder="" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ตั้งชื่อไฟล์</label>
                <a className='mx-2' href="url">link to file</a>
                <input type="text" className="form-control" placeholder="" required/>
            </div>
            <div className="form-group">
                <label className="name-label my-1">ตั้งชื่อไฟล์</label>
                <a className='mx-2' href="url">link to file</a>
                <input type="text" className="form-control" placeholder="" required/>
            </div>
            <label className="checkbox-container my-1">
                <input type="checkbox" required/>
                <span className="checkmark mx-1"></span>
                ส่งอีเมล์อัพเดทสถานะให้ผู้ร้องเรียน
            </label>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="ใส่อีเมล์ที่ส่งเรื่องอัพเดทสถานะ" required/>
            </div>

            <label className="checkbox-container my-1">
                <input type="checkbox" required/>
                <span className="checkmark mx-1"></span>
                ส่งอีเมล์พร้อม PDF ไปยัง
            </label>
            </form>
        </div>
        
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" className="btn btn-warning">ส่งต่อ</button>
        </div>
        </div>
    </div>
  )
}

export default DoModal