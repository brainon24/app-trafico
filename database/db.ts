import mongoose from 'mongoose';

/** STATUS OF CONNECTIONS
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
    isConnected: 0
}

export const connec = async () => {

    if ( mongoConnection.isConnected === 1 ){
        console.log('Ya estamos conectados');
        return;
    }

    if ( mongoose.connections.length > 0 ){
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if( mongoConnection.isConnected === 1 ){
            console.log('Usando conexión anterior')
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect('...');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', '...')
}

export const disconnect = async () => {

    if( mongoConnection.isConnected !== 0 ) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');

}
