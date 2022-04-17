import './App.css';

function App() {
  return (
    <div className="App">
      <div id="top-box">
        <header >
          <div className="logo" > <img src="	https://capway.com/assets/module-site/headers/header-site-transparent/logo.svg" alt=""/></div>
          <div className="icon">  <img src="	https://capway.com/assets/module-site/pages/page-landing/menu-icon-light.svg" alt='' style={{ width: "1.5rem"}}/> </div>
        </header>
        <div className='boxes'>

          <h1>Creating Financial Access & Opportunities</h1>
          <p>No overdraft or minimum balance fees.1 Send and receive money.2 Get paid early.3 Achieve Money Goals.4 Learn money.5...and more. </p><br/>
          <div id='input'> 
            <input type='text' placeholder='Enter email address'></input>
            <span > Sign Me Up</span> </div>
          <div  className='downloads'>
            <span> Download for IOS </span><span>*</span>
            <span> Download for Andriod </span><span>*</span>
            <span> Why You Should Choose CapWay </span>
          </div>
          <div className="top-pic-box"> 
            <div id='pic'>

            </div>
          </div>
        </div>
      </div>
      
      <div id='wrap-2'>
        <div className='boxes'> 
          <h2>Money Account with CapWay</h2>
          <div id='card-list'> 
            <div id='card1'> 
              <div className='item1'>
                <img src='https://capway.com/assets/module-site/pages/page-landing/debit-cards.svg' alt=''/>
                <p>Debit card to access the cashless economy.</p>
              </div>
            </div>
            <div id='card2'> 
              <div className='item3'>
                <img src='https://capway.com/assets/module-site/pages/page-landing/withdrawal.svg' alt='' />
                <p>Withdraw money at ATMs, plus multiple options to deposit funds.</p>
              </div>
            </div>
            <div id='card3'> 
              <div className='item3'>
                <img src='https://capway.com/assets/module-site/pages/page-landing/money-goals.svg'  alt=''/>
                <p>Create and save money towards your Money Goals.</p>
              </div>
            </div>
          </div>
          <button> See All Acount Benefits</button>
        </div>
      </div>

      <div id='wrap3'>
        <div className='boxes'>
          <h2>Download CapWay and Start Your Money Account. </h2>
          <div >
            <img  className ="download" src='https://capway.com/assets/module-site/pages/page-landing/google-play.svg' alt=''/>
            <img  className ="download" src='https://capway.com/assets/module-site/pages/page-landing/app-store.svg' alt=''/>
          </div>
        </div>
      </div>

      <div id='wrap4'>
        <div className='boxes'>
          <div>
            <h2> Phunds: Financial Education Programs </h2>
            <p> Available to individuals, businesses, and organizations - including community organizations, schools, workforce, and municipalities. Increase your knowledge of money by learning from the 20+ financial topics covered in the different Phunds' programs.</p>
            <div className='btn'> <button> Find Out More </button></div>
          </div>
        </div>
        <div className='boxes'>
          <div>
            <h2> The Money Room</h2>
            <p> The master class of money. Engage and learn money from the financial teachings through our collaborations with brands and influencers.</p>
            <div className='btn'>   <button> Download App </button>  </div>
          </div>
        </div>
        <div id='pic4'  >
          <div className='img4'> </div>
        </div>
      </div>

      <div id="wrap5">
        <div className='boxes'>
          <h2> Get to Know Money Better </h2>
          <div id='5th-link-wrapper'>
            <div className='links'> Articles</div>
            <div className='links'> Videos</div>
            <div className='links'> Facts & Hacks</div>
            <div className='links'> Infographics</div>
            <div className='links'> Money Meanings</div>
          </div>
          <div className='btn'><button> Learn More About Money </button> </div>
        </div>
      </div>

      <div id='wrap6'>
        <div className='boxes1'>
          <h3>As Featured In</h3>
          <div id='6th-list'>
            <div className='icon'><img src='https://capway.com/assets/module-site/pages/page-landing/feature-essence.svg' alt=''/></div>
            <div className='icon'><img src='https://capway.com/assets/module-site/pages/page-landing/feature-cnn.svg' alt=''/></div>
            <div className='icon'><img src='https://capway.com/assets/module-site/pages/page-landing/feature-business-insider.svg' alt=''/></div>
            <div className='icon'><img src='https://capway.com/assets/module-site/pages/page-landing/feature-inc.svg' alt=''/></div>
            <div className='icon'><img id='forbes' src='https://capway.com/assets/module-site/pages/page-landing/feature-forbes.svg' alt=''/></div>
          </div>
        </div>
      </div>

      <div id="wrap7">
        <div className='boxes'>
          <div id='top7'>
            <h3>Numbers Don't Lie</h3>
            <p> CapWay was created to provide fair financial access and opportunities to everyone, especially those misunderstood, overlooked, and underserved by the traditional banking system.</p>
            <p>Cashless, contactless, banking deserts - the way we bank and handle our finances is changing. Whether you are looking for your first debit card and Money Account or looking for a financial option with a mission to guide and assist you in your economic growth, CapWay is here. </p>
          </div>
          <div  id='bottom7'>
            <div  >
              <img className="card" src='https://capway.com/assets/module-site/pages/page-landing/card-1.png' alt=''/>
              <img className="card" src='https://capway.com/assets/module-site/pages/page-landing/card-2.png' alt=''/>
            </div>
            <div>
            <img className="card" src='https://capway.com/assets/module-site/pages/page-landing/card-3.png' alt=''/>
              <img  className="card" src='https://capway.com/assets/module-site/pages/page-landing/card-4.png' alt=''/>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div id='foot1'>
          <div id='brand'>
           <div id='logo'> <img src='https://capway.com/assets/module-core/footers/footer-default/logo.svg' alt=''/> 
           </div>
            <div id='socials'>
              <div className='social-icon'>  <img src='https://capway.com/assets/module-core/footers/footer-default/footer-facebook.svg' alt='' />  </div>
              <div className='social-icon'>  <img src='https://capway.com/assets/module-core/footers/footer-default/footer-instagram.svg' alt='' />  </div>
              <div className='social-icon'>  <img src='https://capway.com/assets/module-core/footers/footer-default/footer-twitter.svg' alt='' />  </div>
              <div className='social-icon'>  <img src='https://capway.com/assets/module-core/footers/footer-default/footer-youtube.svg' alt='' />  </div>
              <div className='social-icon'>  <img src='https://capway.com/assets/module-core/footers/footer-default/footer-linkedin.svg' alt='' />  </div>
            </div>
          </div>
          <div id="site-map">
            <div className="foot-section">
              <strong>Company </strong><br/>

              <p>About </p>
              <p>Events </p>
              <p>Shop </p>
              <p>Parts & Media </p>
              <p>Sign Up </p>
            </div>
            <div className="foot-section">
              <strong>Money Account </strong><br/>

              <p>Open Account </p>
              <p>Benefits </p>
              <p>Why CapWay </p>
            </div>
            <div className="foot-section">
              <strong>Learn Money </strong><br/>

              <p>Learn Money </p>
              <p>Phunds </p>
              <p>Money Room</p>
              <p> Request Content</p>
            </div>
            <div className="foot-section">
              <strong>WORK WITH CAPWAY</strong><br/>

              <p> Partner </p>
              <p> Contributors</p>
              <p> Ambassador</p>
              <p> Career </p>
            </div>
            <div className="foot-section">
              <strong> SUPPORT </strong><br/>

              <p> Legal </p>
              <p> FAQ </p>
              <p> Contact Us</p>
            </div>
            <div className="foot-section">
              <strong>DOWNLOAD </strong><br/>

              <p>for IOS</p>
              <p> for Android </p>
            </div>
          </div>
        </div ><hr/>
        <div id="foot2" >
          <div className="foot-box"> 
            <p> The CapWay, Inc Debit Visa Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. “Metropolitan Commercial Bank” and “Metropolitan” are registered trademarks of Metropolitan Commercial Bank ©2014. </p>
            <p> 1. For Money Account holders with a negative balance, the CapWay debit card will go into freeze until funds are deposited to bring account back to current. See terms and conditions </p>
            <p> 2. Sending or receiving money from other CapWay account holders will be instant. Transfers from other accounts could take up to 48 hours, depending on the financial institution.  </p>
            <p> 3. Early access to funds requires direct deposit. Early payment is not guaranteed and is dependent on the timing of payer's submission of deposits. We generally post such deposits on the day they are received which may be up to 2 days earlier than the payer's scheduled payment date. </p>
            <p> 4. Money Goals allows account holders to save money towards financial goals created within the CapWay platform. Funds can be transferred from your Money Account or saved through the rounding up of your transactions from purchases. </p>
            <p> 5. CapWay offers financial content through Learn Money free of charge, but may include advertisements through affiliates. Phunds, CapWay's literacy program and session, is paid content or co-branded content. </p>
          </div>
        </div>
        <div  id="foot3" > 
          <p>© 2019-2022 CapWay Inc. All Rights Reserved. </p>
      </div>
      </footer>
      
     
    </div>
  );
}

export default App;