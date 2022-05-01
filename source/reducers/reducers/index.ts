import { combineReducers } from '@reduxjs/toolkit'

import Drugs from './drugs/drugs-slice'

export default combineReducers({
  drugs: Drugs,
})
