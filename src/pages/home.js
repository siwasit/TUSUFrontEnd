import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
import { faArrowUp, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import DoModal from '../components/doModal';
import DoneModal from '../components/doneModal';

const Homepage = () => {

  const [isClick, setIsClick] = useState({
    backlog: true,
    doing: true,
    done: true,
  })

  const handleToggleClick = (propertyName) => {
    setIsClick((prevState) => ({
      backlog: propertyName === 'backlog' ? !prevState.backlog : true,
      doing: propertyName === 'doing' ? !prevState.doing : true,
      done: propertyName === 'done' ? !prevState.done : true,
    }));
    console.log(isClick)
  };

  const stepBarDynamic = () => {
    return isClick.backlog && isClick.doing && isClick.done
  }

  return (
    <div className='bgTaskPage' style={{position:'relative'}}>
      <div className='green-modal-overlay'></div>
      <div className={`container ${stepBarDynamic() ? 'stepbarExpanded' : 'stepbarCollapse'} stepbarExpanded d-flex flex-column`} style={{position:'relative', zIndex:'5'}}>
        <h1 className={`${stepBarDynamic() ? 'title-collapse' : 'title-expand'}`}>สถานะเรื่องร้องเรียนทั่วมหาวิทยาลัย</h1>
        <div className="d-flex">
          <div className="progresses w-100 d-flex">
            <button className={`${stepBarDynamic() ? 'steps-collapse' : 'steps-expand'}`} onClick={() => handleToggleClick('backlog')} style={{position: 'relative'}}>
              <span className="font-weight-bold px-2">Backlog</span>
              <div className={`triangle ${isClick.backlog ? 'd-none' : ''}`}></div>
            </button>

            <span className={`${stepBarDynamic() ? 'line-collapse' : 'line-expand'}`}></span>

            <button className={`${stepBarDynamic() ? 'steps-collapse' : 'steps-expand'}`} onClick={() => handleToggleClick('doing')} style={{position: 'relative'}}>
              <span className="font-weight-bold px-2">Doing</span>
              <div className={`triangle ${isClick.doing ? 'd-none' : ''}`}></div>
            </button>

            <span className={`${stepBarDynamic() ? 'line-collapse' : 'line-expand'}`}></span>

            <button className={`${stepBarDynamic() ? 'steps-collapse' : 'steps-expand'}`} onClick={() => handleToggleClick('done')} style={{position: 'relative'}}>
              <span className="font-weight-bold">Done</span>
              <div className={`triangle ${isClick.done ? 'd-none' : ''}`}></div>
            </button>
          </div>
        </div>
        <Link to='/' className={`btn btn-danger mt-3 d-flex justify-content-center align-items-center gap-3 px-4 py-2 ${stepBarDynamic() ? 'title-collapse' : 'd-none'}`}>
          <FontAwesomeIcon icon={faRightFromBracket} size='xl' />
          <h3>ออกไปพักผ่อนกัน</h3>
        </Link>
      </div> 
      {
        stepBarDynamic() ? 
        <div></div>
        :
        <div className='container w-75 text-center mt-4 rounded' style={{height: 'auto', backgroundColor: '#82dab1', position:'relative', zIndex:'5'}} >
          <main className="table p-2 w-100">
            <section className="table_body w-100">
              <table className={`${isClick.backlog ? 'd-none' : ''}`}>
                  <thead>
                      <tr>
                          <th> ID <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Full Name <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Problem <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td> 1 </td>
                          <td> Siwasit seangnikul</td>
                          <td> I cant pee </td>
                          <td className=''>
                            <p className="status do" data-bs-toggle="modal" data-bs-target="#doTask">Do</p>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <table className={`${isClick.doing ? 'd-none' : ''}`}>
                  <thead>
                      <tr>
                          <th> ID <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Full Name <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Problem <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td> 2 </td>
                          <td> Nutpraphut Praphutsirikul</td>
                          <td> My toast is too burn</td>
                          <td>
                          <p className="status done" data-bs-toggle="modal" data-bs-target="#doneTask">Done</p>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <table className={`${isClick.done ? 'd-none' : ''}`}>
                  <thead>
                      <tr>
                          <th> ID <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Full Name <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                          <th> Problem <span className="icon-arrow"><FontAwesomeIcon icon={faArrowUp}/></span></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td> 3 </td>
                          <td> Nutpraphut Praphutsirikul</td>
                          <td> John</td>
                      </tr>
                  </tbody>
              </table>
            </section>
          </main>
        </div>
      }
      <div className="modal fade" id="doTask" tabindex="-1" aria-labelledby="doTaskdropLabel" aria-hidden="true">
        <DoModal />
      </div>

      <div className="modal fade" id="doneTask" tabindex="-1" aria-labelledby="doneTaskdropLabel" aria-hidden="true">
        <DoneModal />
      </div>
    </div>
  );
};

export default Homepage;
