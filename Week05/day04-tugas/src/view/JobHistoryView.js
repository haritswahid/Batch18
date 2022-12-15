import React, { useEffect, useState } from 'react'
import { list, create, } from '../api/JobHistoryApi'
import JobHistoryFormInput from './form/JobHistoryFormInput'

export default function JobHistoryView(props) {
  const baseValues = {
    employeeId: '',
    startDate: '',
    endDate: '',
    department: '',
    job: '',
  }
  const [jobHistories, setJobHistories] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState(baseValues)

  useEffect(() => {
    list().then(data => {
      setJobHistories(data)
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

  return (
    <div>
      {
        display ? <JobHistoryFormInput
          values={values}
          onSubmitForm={onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues(baseValues)
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Job History</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobHistories && jobHistories.map((reg) => (
                    <tr key={reg.jobHistoryId}>
                      <td>{reg.employeeId}</td>
                      <td>{reg.startDate}</td>
                      <td>{reg.endDate}</td>
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