import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/addexpense";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/'  element={<Home />}></Route>
        <Route path='/add-expense' element={<AddExpense />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
