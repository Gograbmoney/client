import React,{useEffect} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import gograbmoneylogo from "..//..//image/gograbmoneylogo.png"
import { FiSearch } from "react-icons/fi"
import { MdAccountCircle } from "react-icons/md"
import { FaEnvelope, FaPhone } from "react-icons/fa"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Search from "./search";
import { useDispatch, useSelector } from "react-redux"
import { logout ,loadUser} from "../../actions/userActions"


function AccountMenu(props) {
  const { link1, link2, text1, text2 } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 30, height: 30, bgcolor: '#4AADC2' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link to={link1} class="dropdown-item">{text1}</Link>
        </MenuItem>
        <MenuItem>
          <Link to={link2} class="dropdown-item">{text2}</Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading ,isAuthenticated} = useSelector(state => state.user);
 
  // const { state } = useContext(UserContext)
  function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  // to close sidebar menu when user clicks on the screen
  window.addEventListener("click",function(event){
       if (event.target == document.getElementById("mySidenav")) {
          document.getElementById("mySidenav").style.width= "0";
       }
  });

  const RenderMenu = () => {
    if (user) {
      return (
        <React.Fragment>
          <div className="side-nav-container ">
            <button type="button " className="open-nav-button" style={{ "font-size": "30px", "cursor": "pointer" }} onClick={openNav}>
              &#9776;
            </button>
            <div className="sidenav" id="mySidenav">
              <a class="closebtn" onClick={closeNav}>&times;</a>
              <Link to="/" class="nav-item nav-link active" onClick={closeNav}>HOME</Link>
              {/* <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
        <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link> */}
              <Link to="/stores" class="nav-item nav-link" onClick={closeNav}>STORES</Link>
              {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
              <Link to="/gethelp" class="nav-item nav-link" onClick={closeNav}>GET HELP</Link>
              <Link to="/contact" class="nav-item nav-link" onClick={closeNav}>CONTACT US</Link>
            </div>
            <div className=" ml-auto">
              <Link to="/" className="header-heading-container-mobile">
                <img src={gograbmoneylogo} alt="" className="header-logo-on-mobile" />
              </Link>
            </div>
            <div class="navbar-nav ml-auto">
              <AccountMenu link1="/myprofile" text1="My Profile" link2="/logout" text2="Logout" />
            </div>
          </div>
          <div class="navbar-nav mr-auto side-nav-hide"  >
            <Link to="/" class="nav-item nav-link active">HOME</Link>
            {/* <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
      <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link> */}
            <Link to="/stores" class="nav-item nav-link">STORES</Link>
            {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
            <Link to="/gethelp" class="nav-item nav-link">GET HELP</Link>
            <Link to="/contact" class="nav-item nav-link">CONTACT US</Link>
          </div>
          <div class="navbar-nav ml-auto side-nav-hide">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"><MdAccountCircle style={{ fontSize: "22px" }} /> My Account</a>
              <div class="dropdown-menu">
                <Link to="/myprofile" class="dropdown-item">My Profile</Link>
                <Link to="/logout" class="dropdown-item">Logout</Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <div className="side-nav-container ">
            <button type="button" className="open-nav-button" style={{ "font-size": "30px", "cursor": "pointer", "color": "grey" }} onClick={openNav}>
              &#9776;
            </button>
            <div className="sidenav" id="mySidenav">
              <a class="closebtn" onClick={closeNav}>&times;</a>
              <Link to="/" class="nav-item nav-link active" onClick={closeNav}>HOME</Link>
              {/* <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
      <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link> */}
              <Link to="/stores" class="nav-item nav-link" onClick={closeNav}>STORES</Link>
              {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
              <Link to="/gethelp" class="nav-item nav-link" onClick={closeNav}>GET HELP</Link>
            </div>
            <div className=" ml-auto">
              <Link to="/" className="header-heading-container-mobile">
                <img src={gograbmoneylogo} alt="" className="header-logo-on-mobile" />
              </Link>
            </div>
            <div class="navbar-nav ml-auto">
              <AccountMenu link1="/login" text1="Login" link2="/register" text2="Register" />

            </div>
          </div>
          <div class="navbar-nav mr-auto  side-nav-hide">
            <Link to="/" class="nav-item nav-link active">HOME</Link>
            {/* <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
    <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link> */}
            <Link to="/stores" class="nav-item nav-link">STORES</Link>
            {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
            <Link to="/gethelp" class="nav-item nav-link">GET HELP</Link>
          </div>
          <div class="navbar-nav ml-auto side-nav-hide">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
              <div class="dropdown-menu">
                <Link to="/login" class="dropdown-item">Login</Link>
                <Link to="/register" class="dropdown-item">Register</Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    
  }
  return (
    <>
      <div class="top-bar side-nav-hide">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <FaEnvelope style={{ fontSize: "20px" }} /> contactus@gograbmoney.com
            </div>
            <div class="col-sm-6">
              <FaPhone style={{ fontSize: "20px" }} /> +012-345-XXXX
            </div>
          </div>
        </div>
      </div>
      <div class="nav" style={{ zIndex: 2 }}>
        <div class="container-fluid">
          <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <div class=" navbar-collapse justify-content-between" >
              <RenderMenu />
            </div>
          </nav>
        </div>
      </div>
      <div className="header-container">
        <div className="header-heading-container">
          <Link to="/" >
            <img src={gograbmoneylogo} alt="" className="header-logo" />
          </Link>
        </div>
        <Search />
        <div className="header-nav-links-container">
          <Link to="/myprofile">
            My Earninigs : <span>₹0</span>
          </Link>
        </div>
      </div>
      <div className="header-container-mobile">
        <Search />
      </div>
    </>
  );
};

export default Header 