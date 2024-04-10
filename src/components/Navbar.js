import { Component } from "react";
import "./Navbar.css";
import { Menudata } from "./MenuData";
import { Link } from 'react-router-dom';

class Navbar extends Component{
   state = {clicked: false};
   handleClick =()=>{
    this.setState({clicked: !this.state.clicked})}
render(){
    return(
       <nav className="NavbarItems">
        
        <Link to="/home" className="logo-link">
                    <h1 className="logo">1F CONBOM</h1>
                </Link>
            
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {Menudata.map((item,index)=>{
                    return(
                    <li key={index}>
                        <a href={item.url}
                        className={item.cName}>
                        <i className={item.icon}></i>{item.title}</a>
                    </li>
                    )
                })}
                    
                   
              </ul>    

        </nav>
    )
}
}

export default Navbar;