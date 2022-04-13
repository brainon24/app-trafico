import React, { FC, DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { UIContext } from '../../context/ui/UIContext';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext )

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id)

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

  return (
    <Card
        sx={{ marginBotom: 1, margin: '10px 0px' }}
        //Eventos Drag And Drop
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
