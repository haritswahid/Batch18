import React, { useEffect, useState } from 'react'
import { list, create, update, remove } from '../api/LocationApi'
import LocationFormInput from './form/LocationFormInput'

export default function LocationView(props) {
  const [locations, setLocations] = useState([])
  const [goUpdate, setUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState({
    streetAddress: '',
    postalCode: '',
    city: '',
    stateProvince: '',
    country: '',
  })

  useEffect(() => {
    list().then(data => {
      setLocations(data)
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
        display ? <LocationFormInput
          values={values}
          onSubmitForm={goUpdate? onUpdate : onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues({
                locationName: '',
              })
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Location</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Location ID</th>
                  <th>Street Address</th>
                  <th>Postal Code</th>
                  <th>City</th>
                  <th>State Province</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  locations && locations.map((reg) => (
                    <tr key={reg.locationId}>
                      <td>{reg.locationId}</td>
                      <td>{reg.streetAddress}</td>
                      <td>{reg.postalCode}</td>
                      <td>{reg.city}</td>
                      <td>{reg.stateProvince}</td>
                      <td>
                        <button onClick={() => {
                          setValues(...reg)
                          setUpdate(true)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(reg.locationId)}>Delete</button>
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