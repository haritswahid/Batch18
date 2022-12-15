import React, { useEffect, useState } from 'react'
import CountryFormInput from './form/CountryFormInput'
import CountryApi from '../api/CountryApi'

export default function CountryView() {
  const [countries, setCountries] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [countryId, setCountryId] = useState(0)

  useEffect(() => {
    CountryApi.list().then(data => {
      setCountries(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    CountryApi.remove(id).then(() => {
      setRefresh(true)
      window.alert('Data Successfully Delete')
    })
  }
  return (
    <div>
      {
        display ? <CountryFormInput
          countryId={countryId}
          setDisplay={setDisplay}
          setRefresh={setRefresh}
        /> :
          <div>
            <button onClick={() => {
              setDisplay(true)
              setCountryId(0)
            }} style={{ margin: '0px 0px 20px 0px' }}>Add Country</button>
            <table border='1' cellPadding='20'>
              <thead>
                <tr>
                  <th>Country ID</th>
                  <th>Country Name</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {
                  countries && countries.map(country => (
                    <tr key={country.countryId}>
                      <td>{country.countryId}</td>
                      <td>{country.countryName}</td>
                      <td>
                        <button onClick={() => {
                          setCountryId(country.countryId)
                          setDisplay(true)
                        }}>Update</button>
                        <button onClick={() => onDelete(country.countryId)}>Delete</button>
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