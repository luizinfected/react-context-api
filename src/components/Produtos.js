import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Produtos = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h2>Produtos</h2>
      <p>O valor do counter é :{counter}</p>
    </div>
  )
}

export default Produtos