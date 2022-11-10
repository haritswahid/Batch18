import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import CountryReduce from "./CountryReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    regionStated: RegionReduce,
    countryStated: CountryReduce,
})

export default rootReducer