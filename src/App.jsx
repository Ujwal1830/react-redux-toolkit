import BurgerView from './features/burger/BurgerView'
import PizzaView from './features/pizza/PizzaView'
import ProductsView from './features/products/ProductsView'
import './index.css'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 min-h-screen bg-gray-100 w-full">
        <PizzaView />
        <BurgerView />
        <ProductsView />
      </div>
    </>
  )
}

export default App
