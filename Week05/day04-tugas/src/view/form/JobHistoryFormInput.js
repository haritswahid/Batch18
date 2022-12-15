import React from 'react'

export default function JobHistoryFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Employee ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('employeeId')} value={props.values.employeeId}></input>
        </div>
        <div>
          <label>Start Date : </label>
          <input type="date" placeholder='' onChange={props.handleOnChange('startDate')} value={props.values.startDate}></input>
        </div>
        <div>
          <label>End Date : </label>
          <input type="date" placeholder='' onChange={props.handleOnChange('endDate')} value={props.values.endDate}></input>
        </div>
        <div>
          <label>Department ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('department')} value={props.values.department}></input>
        </div>
        <div>
          <label>Job ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('job')} value={props.values.job}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
