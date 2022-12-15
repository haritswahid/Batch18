import React, { useEffect, useState } from 'react'
import { list, create, update, remove } from '../api/EmployeeApi'
import EmployeeFormInput from './form/EmployeeFormInput'

export default function EmployeeView(props) {
  const baseValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    hireDate: '',
    salary: '',
    commissionPct: '',
    xempId: '',
    department: '',
    job: '',
    manager: '',
  }
  const [employees, setEmployees] = useState([])
  const [goUpdate, setUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState(baseValues)

  useEffect(() => {
    list().then(data => {
      setEmployees(data)
    })
    setRefresh(false)
  }, [refresh])

  const handleChange = name => event => {
    // console.log(event)
    setValues({ ...values, [name]: event.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    create(values).then((e) => {
      setRefresh(true)
      setDisplay(false)
      window.alert('Data Successfully Added')
    })
  }

  const onUpdate = async (event) => {
    event.preventDefault()
    update(values).then((e) => {
      setRefresh(true)
      setDisplay(false)
      window.alert('Data Successfully Updated')
    })
  }

  const onDelete = async (id) => {
    remove(id).then(() => {
      setRefresh(true)
      window.alert('Data Successfully Delete')
    }).catch((err)=>{
      const { message } = err.response.data
      window.alert(message)
    })
  }

  return (
    <div>
      {
        display ? <EmployeeFormInput
          values={values}
          onSubmitForm={goUpdate? onUpdate : onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues(baseValues)
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Employee</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Hire</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  employees && employees.map((reg) => (
                    <tr key={reg.employeeId}>
                      <td>{reg.employeeId}</td>
                      <td>{`${ reg.firstName } ${ reg.lastName }`}</td>
                      <td>{reg.email}</td>
                      <td>{reg.phoneNumber}</td>
                      <td>{reg.hireDate}</td>
                      <td>{`$ ${reg.salary}`}</td>
                      <td>
                        <button onClick={() => {
                          setValues(...reg)
                          setUpdate(true)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(reg.employeeId)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
      }
    </div>
  );
}