import {combineReducers} from 'redux'
import { countReducer } from './count.reducer';

export const rootReducer = combineReducers({
    counts : countReducer
})