import { createStore } from "redux";
import changeNumber from './Reducer'
const store=createStore(changeNumber);

export default store;