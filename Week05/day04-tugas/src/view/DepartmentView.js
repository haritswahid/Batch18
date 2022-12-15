import React, { useEffect, useState } from 'react'
import { list, create, update, remove } from '../api/DepartmentApi'
import DepartmentFormInput from './form/DepartmentFormInput'

export default function DepartmentView(props) {
  const baseValues = {
    departmentName: '',
  }
  const [departments, setDepartments] = useState([])
  const [goUpdate, setUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState(baseValues)

  useEffect(() => {
    list().then(data => {
      setDepartments(data)
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
        display ? <DepartmentFormInput
          values={values}
          onSubmitForm={goUpdate? onUpdate : onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues(baseValues)
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Department</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Department ID</th>
                  <th>Department Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  departments && departments.map((reg) => (
                    <tr key={reg.departmentId}>
                      <td>{reg.departmentId}</td>
                      <td>{reg.departmentName}</td>
                      <td>
                        <button onClick={() => {
                          setValues(...reg)
                          setUpdate(true)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(reg.departmentId)}>Delete</button>
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