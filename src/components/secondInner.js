import React from 'react'

export const SecondInner = () => {
  return (
    <div id="wrap2">
      <div className='inner'>
        <h2> Money Account with CapWay</h2>
        <div className='box-list' >
          <div className='box' id='box1' data-aos="zoom-in" data-aos-duration="500"  >
            <div className='pic' id='pic1' ></div>
            <p>Debit card to access the cashless economy.</p>
          </div>
          <div className='box' id='box2' data-aos="zoom-in-down" data-aos-duration="500" >
            <div className='pic' id='pic2' ></div>
            <p>Withdraw money at ATMs, plus multiple options to deposit funds.</p>
          </div>
          <div className='box' id='box3' data-aos="zoom-in" data-aos-duration="500" >
            <div className='pic' id='pic3' ></div>
            <p>Create and save money towards your Money Goals.</p>
          </div>
        </div>
        <button> See All Account Features</button>
      </div>
    </div>
  )
}

