import { useContext } from "react/cjs/react.development"
import DataContext from "../data/DataContext"



const ReportComponent = ()=>{
    const {income, expense} = useContext(DataContext)
    return (
        <div>
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    )
    
}

export default ReportComponent