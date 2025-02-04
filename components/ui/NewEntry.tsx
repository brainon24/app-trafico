import { ChangeEvent, useContext, useState } from 'react';
import { Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box } from '@mui/system';
import { EntriesContext } from '../../context/entries/EntriesContext';
import UIContext from '../../context/ui/UIContext';

export const NewEntry = () => {

    const { addNewEntry } = useContext( EntriesContext );

   const { isAddingEntry, setIsAddingEntry } = useContext( UIContext )

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return;

        console.log(inputValue)
        addNewEntry(inputValue)
        setIsAddingEntry( false )
        setTouched( false )
        setInputValue('')
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>

        {
            isAddingEntry ? (
                <>
                    <TextField 
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1}}
                        //placeholder='Nueva Entrada'
                        autoFocus
                        multiline
                        label='Nueva Tarea'
                        helperText={ inputValue.length <= 1 && touched && 'Ingrese un valor' }
                        error={ inputValue.length <= 1 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched( true ) }
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant='text'
                            onClick={() => setIsAddingEntry(false)}
                            color='error'
                        >
                            Cancelar
                        </Button>
                        <Button 
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveOutlinedIcon/> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={ <AddIcon /> }
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar Tarea
                </Button>
            )
        }
    </Box>
  )
}
