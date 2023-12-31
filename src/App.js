import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./action/userAction";
import "./style/common.style.css";
import AppLayout from "./Layout/AppLayout";
import AppRouter from "./routes/AppRouter";
import Footer from "./footer";

function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter />
        <Footer />
      </AppLayout>
    </div>
  );
}

export default App;
