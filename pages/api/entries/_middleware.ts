import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export function middleware(req: NextRequest, ev: NextFetchEvent){

    const id = req.page.params?.id || '';
    
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if ( !mongoose.isValidObjectId( id ) ){
        //return res.status(400).json({ message: `El ID ${id} no es valido` })
        return new Response(JSON.stringify({ message: `El ID ${id} no es valido` }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    return NextResponse.next();

}