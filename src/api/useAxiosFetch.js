import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataURL) =>{
     const [data, setData] = useState([]);
     const [fetchError, setFetchError] = useState(null);
     const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
       
 
        const fetchData = async (URL) => {

            setIsLoading(true);
            try{
                const response = await axios.get(URL) ;
                    setData(response.data);
                    setFetchError(null);
                
            }catch (err) {
                    setFetchError(err.message);
                    setData([]);
                
            } finally {
                  setTimeout(() => 
                  setIsLoading(false), 2000);
            }
        }

        fetchData(dataURL);

       
     }, [dataURL]);

     return { data, fetchError, isLoading};
}

export default useAxiosFetch;
