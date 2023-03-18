import React, { useMemo, useState }  from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
function sum(a, b){
    //função simulando uma demora de resposta/processamento:
    const future = Date.now() + 2000    
    while(Date.now() < future){} // espera 2 segundos
    return a + b
}
const UseMemo = (props) => {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [input3, setInput3] = useState(0)
    /*
    const result = sum(input1, input2)
    essa chamada faz com que o input 3 demore 2s para responder
    */
    const result = useMemo(()=>sum(input1,input2), [input1,input2])
    //utilizando o useMemo o input 3 não será afetado
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercicio useMemo" />
            <div className="center">
                <input type="number" className="text" value={input1} onChange={e => setInput1(parseInt(e.target.value))} />
                <input type="number" className="text" value={input2} onChange={e => setInput2(parseInt(e.target.value))} />
                <input type="number" className="text" value={input3} onChange={e => setInput3(parseInt(e.target.value))} />

            <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
