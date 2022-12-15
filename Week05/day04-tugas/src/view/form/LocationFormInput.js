import React from 'react'

export default function LocationFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <input hidden onChange={props.handleOnChange('locationId')} value={props.values.locationId?props.values.locationId:''}></input>
        <div>
          <label>Street Address : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('streetAddress')} value={props.values.streetAddress}></input>
        </div>
        <div>
          <label>Postal Code : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('postalCode')} value={props.values.postalCode}></input>
        </div>
        <div>
          <label>City Name : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('city')} value={props.values.city}></input>
        </div>
        <div>
          <label>State Province : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('stateProvince')} value={props.values.stateProvince}></input>
        </div>
        <div>
          <label>Country ID : </label>
          <input type="text" placeholder='' onChange={props.handleOnChange('countryId')} value={props.values.countryId}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
