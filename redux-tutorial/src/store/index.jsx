import { configureStore } from "@reduxjs/toolkit";
import { changeSearchTerm, addCar, removeCar, carsReducer } from "./CarsSlice";
import { changeCost, changeName, formReducer } from "./FormSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { addCar, removeCar, changeSearchTerm, changeCost, changeName };
