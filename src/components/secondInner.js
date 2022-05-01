import React from 'react'
import { createMapKey } from './helpers'

export const SecondInner = () => {
  const uri = 'https://web.dev.cpwys.co/assets/module-site/pages/page-landing/'
  const cardData = [
    {
      bgImage: 'card-debit-cards.png',
      iconImage: 'debit-cards.svg',
      text: 'Debit card to access the cashless economy.'
    },
    {
      bgImage: 'card-withdrawal.png',
      iconImage: 'withdrawal.svg',
      text: 'Withdraw money at ATMs, plus multiple options to deposit funds.'
    },
    {
      bgImage: 'card-money-goals.png',
      iconImage: 'money-goals.svg',
      text: 'Create and save money towards your Money Goals.'
    }

  ]
  const createCards = createMapKey(cardData.map(card => {
    return (
      <div className='card-container' style={{ backgroundImage: `url(${uri}${card.bgImage})` }} >
        <div className='card-main' >
          <div className='card-icon' style={{ backgroundImage: `url(${uri}${card.iconImage})` }}></div>
          <p className='card-text'>{card.text}</p>
        </div>
      </div>
    )
  }))


  return (
    <div id="section-two">
      <div className='section-two__inner'>
        <h2> Money Account with CapWay</h2>
        <div className='section-two__inner__card-list' >
          {createCards}
        </div>
        <div className='section-two__inner__card-button'>
          <button> See All Account Features</button>
        </div>

      </div>
    </div>
  )
}

