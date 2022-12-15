import React from 'react'

export default function EmployeeFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <input hidden onChange={props.handleOnChange('employeeId')} value={props.values.employeeId?props.values.employeeId:''}></input>
        <div>
          <label>First Name : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('firstName')} value={props.values.firstName}></input>
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('lastName')} value={props.values.lastName}></input>
        </div>
        <div>
          <label>Email : </label>
          <input type="text" placeholder='without "@mail.com"' onChange={props.handleOnChange('email')} value={props.values.email}></input>
        </div>
        <div>
          <label>Phone : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('phoneNumber')} value={props.values.phoneNumber}></input>
        </div>
        <div>
          <label>Hire Date : </label>
          <input type="date" placeholder='' onChange={props.handleOnChange('hireDate')} value={props.values.hireDate}></input>
        </div>
        <div>
          <label>Salary : </label>
          <input type="number" placeholder='' onChange={props.handleOnChange('salary')} value={props.values.salary}></input>
        </div>
        <div>
          <label>Commission Pct : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('commissionPct')} value={props.values.commissionPct}></input>
        </div>
        <div>
          <label>Xemp ID : </label>
          <input type="number" placeholder='' onChange={props.handleOnChange('xempId')} value={props.values.xempId}></input>
        </div>
        <div>
          <label>Department ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('department')} value={props.values.department}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
