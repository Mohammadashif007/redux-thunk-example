import { useSelector } from "react-redux";
import Account from "./components/Account/Account";
import Bonus from "./components/Bonus/Bonus";
import Admin from "./components/Admin/Admin";


function App() {
  const amount = useSelector(state => state.account.amount);
    return (
        <div className="bg-gray-400">
            <h1>App</h1>
            <h2>Current Amount: {amount}</h2>
            <Account></Account>
            <Bonus></Bonus>
           <Admin></Admin>
        </div>
    );
}

export default App;
