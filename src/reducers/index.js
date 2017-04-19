import { combineReducers } from 'redux';
import LibraryReduce from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers ({
   libraries: LibraryReduce,
   selectedLibraryId: SelectionReducer
});
