import { useEffect, useState } from "react";
import yelp from "../api/yelp"

export default()=>{
    const [results, SetResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const searchApi = async(searchTerm)=>{
        try{
            const response =await yelp.get("/search",{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:"İstanbul"
                }
            })
            SetResults(response.data.businesses) 
            setErrorMessage("")  
        }
        catch(error){
           setErrorMessage("Bağlantı Hatası")
        }
        
    }
    useEffect(()=>{
        searchApi("Döner")
    },[])
    
    return [searchApi,results,errorMessage]
}