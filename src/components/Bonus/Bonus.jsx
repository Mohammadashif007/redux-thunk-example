import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/features/bonusSlice/bonusSlice";


const Bonus = () => {
    const dispatch = useDispatch();
    const bonus = useSelector(state => state.bonus.amount)
    return (
        <div className="border-2 border-white text-white flex gap-3 flex-col  items-center p-5">
            <h1>Bonus Component</h1>
            <h2>Amount : $ {bonus} </h2>
            <h2>Total Point: $</h2>
            <button onClick={()=> dispatch(increment())} className="bg-sky-700 p-3 rounded-md">Increment + </button>
        </div>
    );
};

export default Bonus;
