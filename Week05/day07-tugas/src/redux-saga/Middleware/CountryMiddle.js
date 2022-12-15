import { call, put } from 'redux-saga/effects'
import CountryApi from '../../api/CountryApi'
import {
    GetCountrySuccess, GetCountryFailed, AddCountrySuccess, AddCountryFailed
    , DelCountrySuccess, DelCountryFailed, GetOneCountrySuccess, GetOneCountryFailed
    , EditCountrySuccess, EditCountryFailed
} from '../Action/CountryAction'

function* handleGetCountry() {
    try {
        // console.log('asdasdasd');
        const result = yield call(CountryApi.list)
        yield put(GetCountrySuccess(result))
    } catch (error) {
        yield put(GetCountryFailed(error))
    }
}

function* handleGetOneCountry(action) {
    const { payload } = action
    try {
        const result = yield call(CountryApi.get, payload)
        yield put(GetOneCountrySuccess(result))
    } catch (error) {
        yield put(GetOneCountryFailed(error))
    }
}

function* handleDelCountry(action) {
    const { payload } = action
    try {
        const result = yield call(CountryApi.remove, payload)
        yield put(DelCountrySuccess(payload))
    } catch (error) {
        yield put(DelCountryFailed(error))
    }
}

function* handleAddCountry(action) {
    const { payload } = action
    try {
        // console.log(action);
        const result = yield call(CountryApi.create, payload)
        // console.log('Dfefff',result);
        yield put(AddCountrySuccess(result.data))
    } catch (error) {
        yield put(AddCountryFailed(error))
    }
}

function* handleEditCountry(action) {
    const { payload } = action
    try {
        const result = yield call(CountryApi.update, payload)
        yield put(EditCountrySuccess(result.data))
    } catch (error) {
        yield put(EditCountryFailed(error))
    }
}

export {
    handleAddCountry,
    handleDelCountry,
    handleEditCountry,
    handleGetOneCountry,
    handleGetCountry
}