import React from 'react'
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai'

function Success() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
        <h1>Ödemeniz Başarıyla Gerçekleşmiştir.</h1>
        <AiOutlineCheckCircle color={"#0ab285"} size={300} />
    </div>
  )
}

export default Success