import { Outlet } from "react-router-dom"
import Postgraduate from "./Postgraduate"
import Undergraduate from "./Undergraduate"

function Programs() {
  return (
    <div className="mb-20">
      <Undergraduate />
      <Postgraduate />
    </div>
  )
}

export default Programs
