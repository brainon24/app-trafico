//import { toDate } from "date-fns"

export const getComplete = ( date: number ) => {

    //const result = toDate(date)

    const result = new Date().toLocaleDateString()

    return result;

} 