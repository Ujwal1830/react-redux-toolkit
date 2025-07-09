import { useDispatch, useSelector } from "react-redux";
import { customer_choice, pizza_order } from "./pizzaSlice";
import { useState } from "react";

const PizzaView = () => {

    const [count, setCount] = useState(1);
    const { pizzaBase } = useSelector((state) => state.pizza);

    const dispatch = useDispatch();

    return (
        <div className='flex flex-col items-center justify-center gap-5 bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-xl'>
            <h2 className="heading">Number of Pizza Base : {pizzaBase}</h2>
            <div className="flex flex-row gap-5">
                <input
                    type="text"
                    value={count}
                    onChange={(ev) => setCount(Number(ev.target.value))}
                />
                <button onClick={() => dispatch(customer_choice(count))} className='button'>Customer Choice</button>
            </div>
            <button onClick={() => dispatch(pizza_order())} className='button'>Order Pizza</button>
        </div>
    )
}

export default PizzaView;