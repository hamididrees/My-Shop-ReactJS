import {combineReducers} from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducer";
import changeTheNumber from "./QuantityUpDown";

const rootReducer = combineReducers({
    allProducts:ProductReducer,
    product:SelectedProductReducer,
    changeTheNumber,
})

export default rootReducer;