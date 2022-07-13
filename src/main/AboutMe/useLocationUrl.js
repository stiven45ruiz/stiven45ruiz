import React from 'react'

const useLocationUrl = () => {

  const [locationUrl, setLocationUrl] = React.useState(null);

  React.useEffect(()=>{
    setLocationUrl('profile')
    console.log('hola', locationUrl)

  },[])


  return {
    locationUrl,
    setLocationUrl
  }
}
export {useLocationUrl}