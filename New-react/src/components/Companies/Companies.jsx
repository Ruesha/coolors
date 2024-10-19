import disney from '../../assets/disney-svgrepo-com.svg'
import dreamworks from '../../assets/brand-dreamworks-svgrepo-com.svg'
import Warn from '../../assets/warnerbros-dot-svgrepo-com.svg'
import Netflix from '../../assets/netflix-svgrepo-com.svg'
import Airbnb from '../../assets/airbnb-179-svgrepo-com.svg'
import Dropbox from '../../assets/dropbox-svgrepo-com.svg'
import Hasbro from '../../assets/download (1).png'
import ubisoft from '../../assets/ubisoft-svgrepo-com.svg'
import EA from '../../assets/ea-svgrepo-com.svg'
import Apple from '../../assets/apple-logo-svgrepo-com.svg'
import Microsoft from '../../assets/microsoft-150-svgrepo-com.svg'
import './companies.css'

function Companies() {
    return(
        <div className='comp'>
            <center>
            <p>Used by 5+ million designers and by top companies</p>
            <div className="images">
                <img src={disney} alt="" />
                <img src={dreamworks} alt="" />
                <img src={Warn} alt="" />
                <img src={Netflix} alt="" />
                <img src={Airbnb} alt="" />
                <img src={Dropbox} alt="" />
                <img src={Hasbro} alt="" />
                <img src={ubisoft} alt="" />
                <img src={EA} alt="" />
                <center>
                <div className="me">
                <img src={Apple} alt="" />
                <img src={Microsoft}alt="" />
                </div>
                </center>
                
               
            </div>
            </center>
        </div>
    )
}
export default Companies