import { combineReducers } from "redux";
import CountryReduce from "./CountryReducer";
import RegionReduce from "./RegionReducer";

const rootReducer = combineReducers({
    regionStated: RegionReduce,
    countryStated: CountryReduce,
})

export default rootReducer