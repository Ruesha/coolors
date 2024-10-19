import './Header.css'
function Header (){
    return(
        <div className='container '>
          <div className='logo'>
            coolors
          </div>
          <div className="nav">
            <nav>Tools</nav>
            <nav className='red'>Go Pro</nav>
            <nav>Sign In</nav>
            <button>Sign Up</button>
          </div>
        </div>
    )
}
export default Header