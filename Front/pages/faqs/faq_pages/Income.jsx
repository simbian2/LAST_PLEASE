import Link from 'next/link'
import { useEffect } from 'react'
import {getFAQIncome} from '../../../api/api'
import {useContext} from 'react'
import Store from '../../../Store/context'


const Income = () => {
    //http://localhost:4000/getFAQIncome

    const {state,dispatch} = useContext(Store)

    useEffect( async ()=>{
        const response = await fetch('http://localhost:4000/getFAQIncome')
        const data = await response.json()
        dispatch({type:'FAQ_GET',payload:data})
    },[])

    const IncomeList = state.FAQ.map((v) => {
        return (
            <tr key={v.id}>
                <td>{v.id}</td>
                <td><Link href=""><a>{v.Question}</a></Link></td>
            </tr>
        )
    })

    return (
        <>
            <table className="FaqTable">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>FAQ</th>
                    </tr>
                </thead>
                <tbody>
                    {IncomeList}
                </tbody>
            </table>
        </>
    )
}

export default Income