import React, { useEffect, useState } from 'react'
import { BiPlug, BiWifi } from "react-icons/bi"
import { AiOutlineClockCircle, AiOutlineDown } from 'react-icons/ai'
import { FaTv } from 'react-icons/fa'
import Seat from './Seat'
import { Link } from 'react-router-dom'

function Firm({ title, addOn, color, takeOff, estimatedTime, route, seating, price }) {

    const [seat, setSeat] = useState(false);
    const [chosen, setChosen] = useState([]);

    function handleClick(number) {
        setChosen([...chosen, number])
    }
    function handleRemove(number) {
        let arr = chosen.filter((item) => {
            return item !== number
        })
        setChosen(arr)
    }

    useEffect(() => {
        console.log(chosen)
    }, [chosen])

    let number = 1
    function Bus(num) {
        let temp = []
        for (let i = 0; i < num; i++) {
            let taken = Math.floor(Math.random() * 2.9)
            temp.push(<Seat num={number} seating={taken} click={handleClick} remove={handleRemove} />)
            number++
        }
        return temp
    }

    return (
        <div className='firm'>
            <div className='firm-data'>
                <div className='firm-data-title' style={{ color: color }}>
                    <p>{title}<br />{addOn}</p>
                </div>
                <div className='firm-data-time'>
                    <div className='firm-data-clock'>
                        <AiOutlineClockCircle size={22} /><p>{takeOff}</p>
                    </div>
                    <p>({estimatedTime})*</p>
                </div>
                <div className='firm-data-destination'>
                    <div >
                        <img src='https://www.obilet.com/koltuk/a' />
                        <p >{seating}</p>
                    </div>
                    <p>{route}</p>
                </div>
                <div className='firm-data-price'>
                    <p>{price}</p>
                </div>
                <div className="firm-data-button">
                    <button onClick={() => setSeat(!seat)} >Koltuk Seç</button>
                </div>
            </div>
            {
                seat ?
                    <div className='popup'>
                        <p>Güzergah:{route}</p>
                        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly' }} >
                            <div className='bus' >
                                <div className='bus-row1'>
                                    <div className='bus-10'>
                                        {Bus(10)}
                                    </div>
                                    <div className='bus-14' >
                                        {Bus(14)}
                                    </div>
                                </div>
                                <div className='bus-row2'>
                                    <div className='bus-12' >
                                        {Bus(12)}
                                    </div>
                                    <div className='bus-2'>
                                        {Bus(2)}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: 'space-between', width: "20%", borderLeft: "2px solid #ededed", flexDirection: "column" }} >
                                <div style={{ display: "flex", flexDirection: 'row' }}>
                                    {chosen.map((item) => {
                                        return (
                                            <Seat num={item} taken={3} />
                                        )
                                    })}
                                </div>
                                <Link to={"/payment"} >
                                    <button style={{ border: "none", backgroundColor: "#0ab285", color: "white", fontWeight: "600", width: "100%", padding: 10, borderRadius: 10, marginLeft: 20 }}>ONAYLA VE DEVAM ET</button>
                                </Link>
                            </div>
                        </div>
                    </div> : null
            }
            <div className='amenities'>
                <div>
                    <BiWifi /><BiPlug /><FaTv />
                </div>
                <button onClick={() => setSeat(!seat)} >
                    <AiOutlineDown size={16} /> &nbsp; İncele
                </button>
            </div>

        </div>
    )
}

export default Firm