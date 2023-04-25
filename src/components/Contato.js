import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Contato = () => {
  const { counter } = useContext(CounterContext)
  return (
    <div>
      <h2>Contato</h2>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Contato