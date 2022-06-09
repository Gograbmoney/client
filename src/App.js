import HomePage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetHelp from "./pages/gethelp/gethelp";
import Error from "./pages/error";
import ReferAndEarn from "./pages/referandearn/referandearn";
import Stores from "./pages/stores/stores";
import Categories from "./pages/category/category";
import LatestProduct from "./pages/latestproduct/latestproduct";
import MyProfile from "./pages/myprofile/myprofile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
// import { initialState, reducer } from "./reducer/UseReducer";
// import { createContext, useReducer } from "react";
import Logout from "./pages/logout";
import Contact from "./pages/contact/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchKeyword from "./pages/searchkeyword/searchkeyword";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MerchantDetails from "./pages/details/merchantDetails";
import SearchCategory from "./pages/searchkeyword/searchcategory";
import OfferDetails from "./pages/details/offerDetails";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import store from "./store"
import OtpVarification from "./pages/register/otpvarification";
import ForgetPassword from "./pages/login/forgetpassword";
import ResetPassword from "./pages/login/resetpassword";


const Routing = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:keyword" element={<SearchKeyword />} />
      <Route path="/category/:category" element={<SearchCategory />} />
      <Route path="/gethelp" element={<GetHelp />} />
      <Route path="/referandearn" element={<ReferAndEarn />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/stores/:id" element={<MerchantDetails />} />
      <Route path="/offer/:id" element={<OfferDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/latestproduct" element={<LatestProduct />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otpvarification" element={<OtpVarification/>} />
      <Route path="/forgetpassword" element={<ForgetPassword/>} />
      <Route path="/password/reset/:token" element={<ResetPassword/>} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </Router>
  );
};

const App = () => {

  // to load user in state
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <>
      <Routing/>
    </>
  );
};

// // creating ContextAPI

// export const UserContext = createContext();


// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <UserContext.Provider value={{ state, dispatch }}>
//         <Header/>
//         <Routing />
//         <Footer/>
//       </UserContext.Provider>
//     </div>
//   );
// };
export default App;
