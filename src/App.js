import './App.css';
import { ImLocation } from "react-icons/im"
import { FaChevronDown } from "react-icons/fa"

function App() {
  return <>
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title'>
          <p><b>öbilet</b>.com</p>
        </div>
        <div className='navbar-items'>
          <p>Üye Girişi</p>
          <p>Biletlerim</p>
          <p>Yardım</p>
        </div>
      </div>
    </div>
    <div className='body'>
      <div className='Input-container'>
        <div className='Input'>
          <p>Kalkış Noktası</p>
          <div>
            <ImLocation color='grey' size={25} />
            <input value={"Edirne"} />
            <FaChevronDown color='grey' size={25} />
          </div>
        </div>
        <div className='Input-border' ></div>
        <div className='Input'>
          <p>Varış Noktası</p>
          <div>
            <ImLocation color='grey' size={25} />
            <input value={"Ankara"} />
            <FaChevronDown color='grey' size={25} />
          </div>
        </div>
        <div className='Input-border' ></div>
        <div className='Input'>
          <p>Yolculuk Tarihi</p>
          <div>
            <div>
              <ImLocation color='grey' size={25} />
              <input value={"Tarih"} />
            </div>
            <div className='today-tomorrow'>
              <p>Bugün</p>
              <p>Yarın</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App;
