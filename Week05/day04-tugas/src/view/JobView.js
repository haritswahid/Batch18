import React, { useEffect, useState } from 'react'
import { list, create, update, remove } from '../api/JobApi'
import JobFormInput from './form/JobFormInput'

export default function JobView(props) {
  const baseValues = {
    jobId: '',
    jobTitle: '',
    minSalary: '',
    maxSalary: '',
  }
  const [jobs, setJobs] = useState([])
  const [goUpdate, setUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState(baseValues)

  useEffect(() => {
    list().then(data => {
      setJobs(data)
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
        display ? <JobFormInput
          values={values}
          onSubmitForm={goUpdate? onUpdate : onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues(baseValues)
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Job</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Job Title</th>
                  <th>Minimum Salary</th>
                  <th>Maximum Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobs && jobs.map((reg) => (
                    <tr key={reg.jobId}>
                      <td>{reg.jobId}</td>
                      <td>{reg.jobTitle}</td>
                      <td>{reg.minSalary}</td>
                      <td>{reg.maxSalary}</td>
                      <td>
                        <button onClick={() => {
                          setValues(...reg)
                          setUpdate(true)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(reg.jobId)}>Delete</button>
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