import React from 'react'

export default function RegionFormInput(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <input hidden onChange={props.handleOnChange('regionId')} value={props.values.regionId?props.values.regionId:''}></input>
        <div>
          <label>Region Name : </label>
          <input type="text" placeholder='Input Name' onChange={props.handleOnChange('regionName')} value={props.values.regionName}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
          <button type='submit'>Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
