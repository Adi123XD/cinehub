import axios from "axios";
const base_url ='https://api.themoviedb.org/3'
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;
const headers ={
    Authorization: "Bearer "+TMDB_TOKEN
}
export const fetchDataFromApi= async (url , params)=>{
    try{
        let {data} =await  axios.get(base_url+url ,{
            headers,params
        })
        return data
        
    }
    catch (err){
        console.log(err)
        return err
    }

}