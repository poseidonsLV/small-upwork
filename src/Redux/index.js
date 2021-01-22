import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { JobsReducer } from "./reducers/Jobs.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["jobs"],
};

const allReducers = combineReducers({
  jobs: JobsReducer,
});

export default persistReducer(persistConfig, allReducers);
