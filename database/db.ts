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

export const connect = async () => {

    const connectionDB = 'mongodb+srv://brainon:brainon@cluster0.0diau.mongodb.net/trafficApp?retryWrites=true&w=majority'

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

    await mongoose.connect(connectionDB || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', connectionDB)
}

export const disconnect = async () => {

    if( process.env.NODE_ENV === 'development' ) return;

    await mongoose.disconnect();
    
    if( mongoConnection.isConnected === 0 ) return;
    console.log('Desconectado de MongoDB');

}
