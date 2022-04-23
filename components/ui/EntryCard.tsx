import React, { FC, DragEvent, useContext } from 'react'
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography, capitalize } from '@mui/material';
import { Entry } from '../../interfaces/entry';

import { dateFunctions, dateComplet } from '../../utils/'
import { UIContext } from '../../context/ui/UIContext';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext )
    const router = useRouter();

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id)

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }

  return (
    <Card
        sx={{ marginBotom: 1, margin: '10px 0px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
        //Eventos Drag And Drop
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
        onClick={ onClick }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description.length > 60 ? entry.description.substring(0, 60) + '...' : entry.description }</Typography>
            </CardContent>

            {/* <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, marginBottom: '-10px' }}>
                <Typography variant='body2'>{`${ dateComplet.getComplete(entry.createdAt) }`}</Typography>
            </CardActions> */}
            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>{`${ dateFunctions.getFortmatDistanceToNow( entry.createdAt ) }`}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
