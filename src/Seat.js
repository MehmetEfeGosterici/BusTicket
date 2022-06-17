import React, { useEffect, useState } from 'react'

function Seat({ num, seating, click, remove }) {
    const [taken, setTaken] = useState(0)
    const [pop, setPop] = useState(false)

    useEffect(() => {
        setTaken(seating)
    }, [])

    return <>
        <div style={{ position: "relative" }}>

            {
                pop ?
                    <div style={{ position: "absolute", backgroundColor: "white", paddingTop: 10, paddingBottom: 10, bottom: 50, height: 25, width: 200, display: 'flex', justifyContent: 'space-evenly', right: -75, border: "1px solid #ededed", borderRadius: 10, zIndex: 2 }}>
                        <button style={{ border: "1px solid #ededed", borderRadius: 5, background: "#6d8ba9", color: "white", width: 80, fontWeight: 600 }} onClick={() => {
                            setTaken(3)
                            setPop(false)
                            click(num)
                        }} >
                            Male
                        </button>
                        <button style={{ border: "1px solid #ededed", borderRadius: 5, background: "#d08a9e", color: "white", width: 80, fontWeight: 600 }} onClick={() => {
                            setTaken(3)
                            setPop(false)
                            click(num)
                        }}>
                            Female
                        </button>
                    </div>
                    :
                    null
            }
            <div style={{ position: "relative" }}>
                {
                    taken === 0 ? <><img src='https://www.obilet.com/koltuk/a' style={{ width: 40, height: 40, padding: 3, }} onClick={() => {
                        setPop(!pop)
                    }} /><p style={num > 9 ? { position: "absolute", zIndex: 1, top: -3, left: 12 } : { position: "absolute", zIndex: 1, top: -3, left: 17 }} >{num}</p></> : taken === 1 ? <><img src='https://www.obilet.com/koltuk/m' style={{ width: 40, height: 40, padding: 3 }} /><p style={num > 9 ? { position: "absolute", zIndex: 1, top: -3, left: 12 } : { position: "absolute", zIndex: 1, top: -3, left: 17 }}>{num}</p></> : taken === 2 ? <><img src='https://www.obilet.com/koltuk/f' style={{ width: 40, height: 40, padding: 3 }} /><p style={num > 9 ? { position: "absolute", zIndex: 1, top: -3, left: 12 } : { position: "absolute", zIndex: 1, top: -3, left: 17 }}>{num}</p></> : <><img onClick={() => {
                        setTaken(0)
                        remove(num)
                    }} src='https://www.obilet.com/koltuk/s' style={{ width: 40, height: 40, padding: 3 }} /><p style={num > 9 ? { position: "absolute", zIndex: 1, top: -3, left: 12 } : { position: "absolute", zIndex: 1, top: -3, left: 17 }}>{num}</p></>
                }
            </div>
        </div>
    </>
}

export default Seat