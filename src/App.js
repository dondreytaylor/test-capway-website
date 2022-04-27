import React, { useState, useEffect } from 'react'
import { FirstInner } from './components/firstInner'
import { Featured } from './components/featured'
import { SecondInner } from './components/secondInner'
import { Header } from './components/header'
import { KnowMoney } from './components/knowMoney'
import { Numbers } from './components/numbers'
import { Footer } from './components/footer'
import { FinancialEducation } from './components/financialEdu'
import { Download } from './components/download'


export function App () {

    const [dataLinks, setDataLinks] = useState([])

    useEffect(() => {

        fetch('https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney')
            .then(res => res.json())
            .then(data => {
                setDataLinks(data)
            })
            .catch(e => console.error('error pulling data', e.message))

    }, [])

    return (
        <div className='app'>
            <Header />
            <main className='capWayMain'>
                <FirstInner />
                <SecondInner />
                <Download />
                <FinancialEducation />
                <KnowMoney data={dataLinks} />
                <Numbers />
                <Footer />
            </main>
        </div>
    )
}
