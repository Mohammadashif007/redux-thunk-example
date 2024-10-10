import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    getUserAccount,
    increment,
    incrementByAmount,
} from "../../redux/features/accountSlice/accountSlice";
import { useState } from "react";

const Account = () => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.account.amount);

    const [inputAmount, setInputAmount] = useState(0);
    
    return (
        <div className="border-2 border-white p-10 text-white flex flex-col items-center">
            <div className="text-center space-y-3 ">
                <h1>Account Component</h1>
                <h2>Amount : $ {amount}</h2>
                <h2>Points : $</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-sky-700 p-3 rounded-md"
                    >
                        Increment +{" "}
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-sky-700 p-3 rounded-md"
                    >
                        Decrement -{" "}
                    </button>
                    <input
                        onChange={(e) => setInputAmount(Number(e.target.value))}
                        className="p-3 text-black"
                        type="text"
                    />
                    <button onClick={() => dispatch(incrementByAmount(Number(inputAmount)))} className="bg-sky-700 p-3 rounded-md">
                        IncrementByAmount {inputAmount} +
                    </button>
                    <button onClick={() => dispatch(getUserAccount(1))} className="bg-sky-700 p-3 rounded-md">
                        Get User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
