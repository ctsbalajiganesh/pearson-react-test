import { createStore } from 'redux';
import rootReducer from './reducers/RootReducer';

const usersList = [
    {
        id: 'Alice271',
        name: 'Alice',
        role: 'QA',
    },
    {
        id: 'Bob952',
        name: 'Bob',
        role: 'Manager',
    },
    {
        id: 'Martin390',
        name: 'Martin',
        role: 'Developer',
    },
];

const initialState = {
    userData: {
      usersList,
    }
}

export default function configureStore() {
 return createStore(
  rootReducer,
   initialState
 );
}