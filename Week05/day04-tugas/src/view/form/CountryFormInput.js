import React, { useEffect, useState } from 'react'
import CountryApi from '../../api/CountryApi'

export default function CountryFormInput(props) {
  const [values, setValues] = useState({
    countryId: '',
    countryName: '',
    regionId: 0,
  })

  useEffect(() => {
    props.countryId && CountryApi.get(props.countryId).then(response => {
      setValues(response.data)
    }).catch((err) => {
      const { message } = err.response.data
      props.setRefresh(true)
      props.setDisplay(false)
      window.alert(message)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    CountryApi.create(values).then((e) => {
      props.setRefresh(true)
      props.setDisplay(false)
      window.alert('Data Successfully Added')
    }).catch((err)=>{
      const { message } = err.response.data
      window.alert(message)
    })
  }

  const onUpdate = async (event) => {
    event.preventDefault()
    console.log(values);
    CountryApi.update(values).then((e) => {
      props.setRefresh(true)
      props.setDisplay(false)
      window.alert('Data Successfully Updated')
    }).catch((err)=>{
      const { message } = err.response.data
      window.alert(message)
    })
  }
  return (
    <div>
      <form onSubmit={props.countryId ? onUpdate : onSubmit}>
        <div>
          <label>Country Id : </label>
          <input type="text" placeholder='Input Id' onChange={handleChange('countryId')} value={values.countryId}></input>
        </div>
        <div>
          <label>Country Name : </label>
          <input type="text" placeholder='Input Name' onChange={handleChange('countryName')} value={values.countryName}></input>
        </div>
        {
          !props.countryId && <div>
            <label>Region Id : </label>
            <input type="text" placeholder='Input Region Id' onChange={handleChange('regionId')} value={values.regionId}></input>
          </div>
        }
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
