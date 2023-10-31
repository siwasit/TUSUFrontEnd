import React from 'react'

const DoneModal = () => {
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
                    <label className="name-label my-1">เรื่อง</label>
                    <input type="text" className="form-control" placeholder="ยกตัวอย่าง: ร้องเรียนเรื่องไฟจราจร" required/>
                </div>
                <div className="form-group">
                    <label className="name-label my-1">เรียนถึง</label>
                    <input type="text" className="form-control" placeholder="ยกตัวอย่าง: นายสมศักดิ์ ศักดิ์สม" required/>
                </div>
                <div className="form-group">
                    <label className="name-label my-1">ความต้องการของผู้ร้องเรียน</label>
                    <textarea className="form-control" rows="5" required/>
                </div>
                <div className="form-group">
                    <label className="name-label my-1">ข้อความเพิ่มเติมถึงผู้ร้องเรียน</label>
                    <textarea className="form-control" placeholder="ข้อความเพิ่มเติมถึงผู้ร้องเรียน" rows="5" required/>
                </div>
                <label className="checkbox-container my-1">
                    <input type="checkbox" required/>
                    <span className="checkmark mx-1"></span>
                    ส่งอีเมล์อัพเดทสถานะให้ผู้ร้องเรียน
                </label>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="อีเมล์ที่ส่งเรื่องอัพเดทสถานะ" required/>
                </div>
            </form>
        </div>
        
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
            <button type="button" className="btn btn-success">ปิดงาน</button>
        </div>
        </div>
    </div>
  )
}

export default DoneModal