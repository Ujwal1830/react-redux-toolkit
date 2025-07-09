import { useDispatch, useSelector } from "react-redux";
import { burger_order, customer_choice } from "./burgerSlice";
import { useState } from "react";

const BurgerView = () => {

    const [count, setCount] = useState(1);
    const { burgerBuns } = useSelector((state) => state.burger);
    const dispatch = useDispatch()

    return (
        <div className='flex flex-col items-center justify-center gap-5 bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-xl'>
            <h2 className="heading">Number of Burger Buns : {burgerBuns}</h2>
            <div className="flex flex-row gap-5">
                <input
                    type="text"
                    value={count}
                    onChange={(ev) => setCount(Number(ev.target.value))}
                />
                <button onClick={() => dispatch(customer_choice(count))} className='button'>Customer Choice</button>
            </div>
            <button onClick={() => dispatch(burger_order())} className='button'>Order Burger</button>
        </div>
    )
}

export default BurgerView;