import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState{
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'in-progress',
            createdAt: Date.now() - 10000000
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ],
}

export const EntriesProvider: FC = ({ children }) => {

    const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            { children }
        </EntriesContext.Provider>
    )
}