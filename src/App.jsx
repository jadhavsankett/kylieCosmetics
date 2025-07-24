import { useEffect } from "react"
import Nav from "./componets/Nav"
import MainRoutes from "./routes/MainRoutes"
import { asyncurrentuser } from "./store/actions/UserAction"
import { useDispatch } from "react-redux"


const App = () => {
const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncurrentuser())
  },[])
  
  return (
    <>
   <Nav/>
   <MainRoutes/>
    </>
     
  )
}

export default App
