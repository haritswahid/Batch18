import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { AddCountryRequest, EditCountryRequest, GetOneCountryRequest } from '../../redux-saga/Action/CountryAction'

export default function FormikEditCountryApi(props) {
    // console.log(props.id)
    const isCreate = !props.id
    const dispatch = useDispatch()
    const { country } = useSelector(state => state.countryStated)
    const phew = useSelector(state => state)
    const validationSchema = Yup.object().shape({
        countryId: Yup.string('Enter Country ID').required('Country ID is Required').length(2, 'Length must 2 character'),
        countryName: Yup.string('Enter Country Name').required('Country Name is Required'),
        regionId: isCreate && Yup.string('Enter Region ID').required('Region ID is Required')
    })
    useEffect(() => {
        !isCreate && dispatch(GetOneCountryRequest(props.id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: isCreate ? {
            countryId: undefined,
            countryName: undefined,
            regionId: undefined,
        } : {
            countryId: country.countryId,
            countryName: country.countryName,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let payload = new FormData();
            // let payload = {};
            if (isCreate) {
                // payload = {
                //     countryId: values.countryId,
                //     countryName: values.countryName,
                //     regionId: values.regionId,
                // }
                payload.append('countryId', values.countryId)
                payload.append('countryName', values.countryName)
                payload.append('regionId', values.regionId)

                dispatch(AddCountryRequest(payload))
                props.closeAdd()
                window.alert('Data Successfully Insert')
            } else {
                // payload = {
                //     countryId: values.countryId,
                //     countryName: values.countryName,
                // }
                payload.append('countryId', values.countryId)
                payload.append('countryName', values.countryName)

                dispatch(EditCountryRequest(payload))
                props.closeAdd();
                window.alert('Data Successfully Updated')
            }
            // console.log(payload);
            props.onRefresh();
        }
    })
    return (
        <div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700">Country ID</label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="countryId"
                        id="countryId"
                        value={formik.values.countryId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="countryId"
                        onInvalid={formik.validateField}
                        disabled={!isCreate}
                    />
                    {formik.touched.countryId && formik.errors.countryId ? <span className="mt-2 text-sm text-red-600">{formik.errors.countryId}</span> : null}
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-sm font-medium text-gray-700">Country Name</label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="countryName"
                        id="countryName"
                        value={formik.values.countryName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="countryName"
                        onInvalid={formik.validateField}
                    />
                    {formik.touched.countryName && formik.errors.countryName ? <span className="mt-2 text-sm text-red-600">{formik.errors.countryName}</span> : null}
                </div>
            </div>
            {isCreate && <>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-sm font-medium text-gray-700">Region ID</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            type="text"
                            name="regionId"
                            id="regionId"
                            value={formik.values.regionId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="regionId"
                            onInvalid={formik.validateField}
                        />
                        {formik.touched.regionId && formik.errors.regionId ? <span className="mt-2 text-sm text-red-600">{formik.errors.regionId}</span> : null}
                    </div>
                </div>
            </>}
            <div className='mt-5 flex justify-evenly'>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Batal </button>
            </div>
        </div>
    )
}
