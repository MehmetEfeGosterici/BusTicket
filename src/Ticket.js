import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {  ImLocation } from 'react-icons/im'
import {  BiPlug, BiTransfer, BiWifi } from "react-icons/bi"
import { AiOutlineClockCircle, AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaTv } from 'react-icons/fa'
import Seat from './Seat'
import Firm from './Firm'


const firms = [
    { title: "öbilet", addOn: "Turizm", color: "#bc2724", takeOff: "19:30", estimatedTime: "10 saat 30 dakika", seating: "2+2", route: "Ankara(Aşti) - Edirne", price: "370,00₺" },
    { title: "Isparta", addOn: "Petrol", color: "#0c509f", takeOff: "10:30", estimatedTime: "3 saat 15 dakika", seating: "2+1", route: "Ankara(Aşti) - Eskişehir", price: "100,00₺" },
    { title: "Pamukkale", color: "#e30613", takeOff: "06:45", estimatedTime: "6 saat 30 dakika", seating: "2+2", route: "Ankara(Aşti) - İstanbul Avrupa", price: "140,00₺" },
    { title: "Varan", addOn: "Turizm", color: "#252f3d", takeOff: "06:45", estimatedTime: "6 saat 30 dakika", seating: "2+2", route: "Ankara(Aşti) - İstanbul Avrupa", price: "140,00₺" },
    { title: "Nilüfer", addOn: "Turizm", color: "#173763", takeOff: "10:00", estimatedTime: "11 saat 30 dakika", seating: "2+1", route: "Ankara(Aşti) - Edirne", price: "140,00₺" },

]




function Ticket(props) {

    const location = useLocation()
    console.log(location.state)

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-title'>
                    <a style={{textDecoration:"none",color:"white"}} href="http://localhost:3000/" ><p><b>öbilet</b>.com</p></a>
                    </div>
                    <div className='navbar-items'>
                        <p>Üye Girişi</p>
                        <p>Biletlerim</p>
                        <p>Yardım</p>
                    </div>
                </div>
            </div>
            <div className='destination'>
                <div className='destination-item'>
                    <ImLocation />
                    <p>{location.state.from}</p>
                </div>
                <div className='destination-transfer'>
                    <BiTransfer size={20} color={"white"} />
                </div>
                <div className='destination-item'>
                    <ImLocation />
                    <p>{location.state.to}</p>
                </div>
                <div className='destination-date'>
                    <div>
                        <AiOutlineLeft />
                    </div>
                    <div className='date'>
                        <p>{location.state.date}</p>
                    </div>
                    <div>
                        <AiOutlineRight />
                    </div>
                </div>
            </div>
            <div className='travel-firms' >

                {firms.map((item) => {
                    return (
                        <Firm title={item.title} addOn={item.addOn} color={item.color} price={item.price} route={item.route} estimatedTime={item.estimatedTime} seating={item.seating} takeOff={item.takeOff} />
                    )
                })}


            </div>
        </div>

    )
}

export default Ticket