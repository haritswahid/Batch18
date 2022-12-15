import React from 'react'

export default function DepartmentFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <input hidden onChange={props.handleOnChange('departmentId')} value={props.values.departmentId?props.values.departmentId:''}></input>
        <div>
          <label>Department Name : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('departmentName')} value={props.values.departmentName}></input>
        </div>
        <div>
          <label>Manager ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('manager')} value={props.values.manager}></input>
        </div>
        <div>
          <label>Location ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('location')} value={props.values.location}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
