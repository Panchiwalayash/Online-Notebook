import React from 'react'
import './alert.css'

const Alert = (props) => {
  const { alert,hideAlert } = props;
  return (
    <>
    {alert==null?"":
    <>
   { alert.type==="success"?<div className='alertComp'>
           <div><strong style={{marginRight:"5px",marginLeft:"10px"}}>Success!</strong> {alert.message}</div>
            <a onClick={hideAlert} href="#" className='alertStyle'  data-dismiss="alert" aria-label="close">&times;</a>
    </div>:""}
    { alert.type==="error"?<div className='alertDanger'>
    <div><strong style={{marginRight:"5px",marginLeft:"10px"}}>Error!</strong> {alert.message}</div>
     <a onClick={hideAlert} href="#" className='alertStyle'  data-dismiss="alert" aria-label="close">&times;</a>
    </div>:""}
    </>
}
</>
  )
}

export default Alert