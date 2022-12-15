import React from 'react'

export default function JobFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>Job Id : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('jobId')} value={props.values.jobId}></input>
        </div>
        <div>
          <label>Title : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('jobTitle')} value={props.values.jobTitle}></input>
        </div>
        <div>
          <label>Minimum Salary : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('minSalary')} value={props.values.minSalary}></input>
        </div>
        <div>
          <label>Maximum Salary : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('maxSalary')} value={props.values.maxSalary}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
