import Image from '../assets/Screenshot 2024-10-15 171245.png'

const Hero = () => {
  return (
    <div className="main">
            <div className="left">
                <h1>The super fast color palettes generator!</h1>
                <p>Create the perfect palettes or get inspired by thousands of beautiful color schemes.  </p>
                <center>
                <button>Start the generator!</button>
                <button className='second'>Explore trending palettes</button>
                </center>
            </div>
            <div className="image">
               <img src={Image} alt=""  />
            </div>
        </div>
  )
}

export default Hero
