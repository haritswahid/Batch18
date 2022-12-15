import React, { useEffect, useState } from 'react'
import { create, list, remove, update } from '../api/RegionApi'
import RegionFormInput from './form/RegionFormInput'

export default function RegionView(props) {
  const [regions, setRegions] = useState([])
  const [goUpdate, setUpdate] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [values, setValues] = useState({
    regionName: '',
  })

  useEffect(() => {
    list().then(data => {
      setRegions(data)
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
        display ? <RegionFormInput
          values={values}
          onSubmitForm={goUpdate? onUpdate : onSubmit }
          handleOnChange={handleChange}
          setDisplay={setDisplay} /> :
          <div>
            <button onClick={() => {
              setValues({
                regionName: '',
              })
              setDisplay(true)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Region</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Region ID</th>
                  <th>Region Name</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {
                  regions && regions.map((reg) => (
                    <tr key={reg.regionId}>
                      <td>{reg.regionId}</td>
                      <td>{reg.regionName}</td>
                      <td>
                        <button onClick={() => {
                          setValues({
                            regionId:reg.regionId,
                            regionName:reg.regionName
                          })
                          setUpdate(true)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(reg.regionId)}>Delete</button>
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