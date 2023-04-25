import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Empresa = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h2>Empresa</h2>
      <p>O valor do contador é : {counter}</p>
      </div>
  )
}

export default Empresa