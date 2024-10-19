
import './Appli.css'

function Appli (prop) {
    return (
        <div className='appcontain'>
          <div className="app">
            <img src= {prop.image} alt="" />
            <h2>{prop.text}</h2>
            <p className='note'>{prop.note}</p>
          </div>
        </div>
    )
    
}
export default Appli


