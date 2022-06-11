import './App.css';
import { ImLocation } from "react-icons/im"
import { FaChevronDown, FaCopyright } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa"
import { AiOutlineRight } from "react-icons/ai"
import { RiCustomerService2Fill } from "react-icons/ri"
import { RiSecurePaymentLine } from "react-icons/ri"
import { BiCoinStack } from "react-icons/bi"
import { IoIosPeople } from "react-icons/io"
import { IoMdTimer } from "react-icons/io"
import { RiRefund2Line } from "react-icons/ri"
import { FaRegCopyright } from "react-icons/fa"

function App() {
  return <>
    <div className='page'>
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
          <div className='title'>
            <p>Kalkış Noktası</p>
          </div>
          <div className='Input'>
            <div>
              <ImLocation color='grey' size={25} />
              <input value={"Edirne"} />
              <FaChevronDown color='grey' size={25} />
            </div>
          </div>
          <div className='Input-border' ></div>
          <div className='title'>
            <p>Varış Noktası</p>
          </div>
          <div className='Input'>
            <div>
              <ImLocation color='grey' size={25} />
              <input value={"Ankara"} />
              <FaChevronDown color='grey' size={25} />
            </div>
          </div>
          <div className='Input-border' ></div>
          <div className='title'>
            <p>Yolculuk Tarihi</p>
          </div>
          <div className='date-container'>
            <div className='date'>
              <div className='dateSelector'>
                <FaCalendarAlt color='grey' size={25} />
                <input value={"Tarih"} type={"date"} />
              </div>
            </div>
            <div className='today-tomorrow'>
              <button>Bugün</button>
              <button>Yarın</button>
            </div>
          </div>
          <div className='searchButton'>
            <p>OTOBÜS BİLETİ BUL</p>
            <div><AiOutlineRight color={"white"} size={20} /></div>
          </div>
        </div>
        <div className='services'>
          <p>Türkiye'nin En Büyük <b>Otobüs Bileti</b> Sitesi</p>
          <div className='items-container'>
            <div className='item'>
              <RiCustomerService2Fill size={70} color="white" />
              <p>7/24 Müşteri Hizmetleri</p>
            </div>
            <div className='item'>
              <RiSecurePaymentLine size={70} color="white" />
              <p>Güvenli Ödeme</p>
            </div>
            <div className='item'>
              <BiCoinStack size={70} color="white" />
              <p>Komisyon Yok, Ücretsiz</p>
            </div>
            <div className='item'>
              <IoIosPeople size={70} color="white" />
              <p>Ayda en az 1 Ziyaretçi</p>
            </div>
            <div className='item'>
              <IoMdTimer size={70} color="white" />
              <p>İki Dakikada Biletini Al</p>
            </div>
            <div className='item'>
              <RiRefund2Line size={70} color="white" />
              <p>İptal Edilen Bilete Kesintisiz İade</p>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p><FaRegCopyright /> </p>
        <p>2022 Tüm Hakları Saklıdır.</p>
      </div>
    </div>
  </>
}

export default App;
