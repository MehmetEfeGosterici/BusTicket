import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function Payment() {

    const [card, setCard] = useState({
        cvc: "",
        expiry: "",
        focused: "",
        name: "",
        number: ""
    })


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
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between",marginTop:50 }}>
                <Cards
                    cvc={card.cvc}
                    expiry={card.expiry}
                    focused={card.focused}
                    name={card.name}
                    number={card.number}
                />
                <form style={{ display: "flex", justifyContent: "center",flexDirection:"column",width:"35%",margin:"auto" }}>
                    <input style={{height:25,borderRadius:10,border:"1px solid #ededed",padding:10,fontSize:18,marginTop:10}}
                        type="text"
                        name="number"
                        placeholder="Card Number"
                        onChange={(e) => setCard({...card,number:e.target.value})}
                        maxLength={16}
                        value={card.number}
                    />
                    <input style={{height:25,borderRadius:10,border:"1px solid #ededed",padding:10,fontSize:18,marginTop:10}}
                        autoCapitalize
                        type="text"
                        name="name"
                        placeholder="Cardholder Name "
                        onChange={(e) => setCard({...card,name:e.target.value})}
                        maxLength={30}
                    />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <input style={{height:25,borderRadius:10,border:"1px solid #ededed",padding:10,fontSize:18,marginTop:10,width:"44%"}}
                            type="text"
                            name="valid"
                            placeholder="Valid Thru"
                            onChange={(e) => setCard({...card,expiry:e.target.value})}
                            maxLength={4}

                        />
                        <input style={{height:25,borderRadius:10,border:"1px solid #ededed",padding:10,fontSize:18,marginTop:10,width:"44%"}}
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            onChange={(e) => setCard({...card,cvc:e.target.value})}
                            maxLength={3}
                        />
                    </div>
                    <button style={{border:"none",height:40,marginTop:20,borderRadius:10,backgroundColor:"#0ab285",color:"white",fontWeight:"600"}} >SATIN AL</button>
                </form>
            </div>
        </div>
    )
}

export default Payment