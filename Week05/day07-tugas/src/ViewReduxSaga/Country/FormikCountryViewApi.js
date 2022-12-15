import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCountryRequest, DelCountryRequest } from '../../redux-saga/Action/CountryAction'
import Header from '../../Component/Header'
import FormikFormRegionApi from './FormikFormCountryApi'

export default function FormikCountryViewApi() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState(0)
  const [display, setDisplay] = useState(false)
  const { countries } = useSelector(state => state.countryStated)
  useEffect(() => {
    dispatch(GetCountryRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelCountryRequest(id))
    window.alert('Data Successfully Deleted')
  }
  const onClick = (id) => {
    setId(id)
    setDisplay(true)
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      {
        display ?
          <FormikFormRegionApi
            id={id}
            setDisplay={setDisplay}
            closeAdd={() => setDisplay(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          <>
            <Header name={'Country'} setDisplay={setDisplay} setId={setId}/>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 table-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">Country ID</th>
                    <th scope="col" className="px-6 py-3">Country Name</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="overscroll-auto md:overscroll-contain">
                  {
                    countries && countries.map((reg, index) => (
                      // <tr key={reg.country_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <tr key={`${index}-${reg.country_id}`} className="dark:bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-2 font-medium text-gray-900 dark:text-black whitespace-nowrap">{reg.countryId}</td>
                        <td className="px-6 py-2 dark:text-black">{reg.countryName}</td>
                        <td className='py-2 flex justify-evenly'>
                          <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(reg.countryId)}>Delete Country</button>
                          <button type="button" className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(reg.countryId)}>Edit Country</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </>
      }
    </div>
  )
}
