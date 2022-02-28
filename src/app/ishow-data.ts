export interface IShowData {
    
    show:{
        name:string,
    language: string,
    genres: [],
    rating:{
     average: number
    } ,
    image: {
        medium: string | any
    },
    summary: string,
    network: {
        name:string
    },
    schedule: {
     time: string,
     days: []
 }
 }
 
    

}
