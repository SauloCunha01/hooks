import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1 
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}
function parImpar(n){
    if(n%2===0) return 'Par'
    if(n%2!=0) return 'Impar'
}
const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [number2,setNumber2] = useState(0)
    const [status,setStatus] = useState("par")
    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])
    useEffect(function(){
       setStatus(parImpar(number2))
    }, [number2])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
              <SectionTitle title="Exercicio #01"/>
            <div>
                <div className="center"> 
                <span className="text">Fatorial</span>
                <span className="text red">{fatorial === -1 ? 'Não existe': fatorial}</span>
            </div>
            <input type="number" className="input" value={number}
            onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div>
                <span className="text">Status:</span>
                <span className="text red">{status}</span>
            </div>
            <input type="number" className="input" value={number2}
            onChange={e => setNumber2(e.target.value)} />
        </div>
    )
}

export default UseEffect
