import Header from "./components/header"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}
