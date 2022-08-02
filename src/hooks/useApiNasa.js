import { useEffect, useState } from "react";
import axios from "axios";


const useApiNasa = () => {
  const [imageOfTheDay, setImageOfTheDay] = useState()

  const API_KEY = "bBtmTqLj3oA8XwHNieiYeNhFWk1rgO6t2LArlGuL"
  const API_URL = "https://api.nasa.gov/planetary/apod/"


  const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params:{
        'api_key': API_KEY,
    },
  });

  useEffect(()=>{
    const getImageOftheDay = async()=>{
      const {data} = await api()
      setImageOfTheDay(data)
    }
    getImageOftheDay()
  },[])


  return (
    imageOfTheDay
  )
}

export default useApiNasa