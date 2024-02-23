import './topbar.scss'
import {Person, Mail, LinkedIn} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                {/* <a href="#intro" className='logo'>genius.</a> */}

                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+91-7415680701</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" />
                    <span>agarwalkhushi615@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <LinkedIn className="icon" />
                    <a className="customLink" href="https://www.linkedin.com/in/khushi-agarwal-7b1a051a9" target="_blank"
                    rel="noopener noreferrer" title="Linkedin" >Linkedin</a>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
