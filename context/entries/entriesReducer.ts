import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesActionTypes = 
|   { type: 'Entry - Add-Entry', payload: Entry }
|   { type: 'Entry - Entry-Update', payload: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesActionTypes ): EntriesState => {

    switch( action.type ){
       case 'Entry - Add-Entry':
           return {
               entries: [ ...state.entries, action.payload ]
           }
           case 'Entry - Entry-Update':
               return{
                   ...state,
                   entries: state.entries.map( entry => {
                       if( entry._id === action.payload._id ){
                           entry.status = action.payload.status;
                           entry.description = action.payload.description
                       }
                       return entry;
                   })
               }
       default:
           return state;
    }

}
