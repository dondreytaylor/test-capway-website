import './App.css';
import React, {useState, useEffect} from 'react'
import axios  from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [value, setValue]= useState('')
  const [pic, setPic]=useState([])
  const [data, setData]=useState("shortarticle")
  const liveLink = { color: "#00ace2", borderBottomColor: "#00ace2"}
  useEffect(() => {
    
    axios.get('https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney')
          .then(res => {
            console.log(res.data)
            setPic(res.data[data].splice(0, 4).map(x=> x))
          } )
          .catch(e => console.log(e.message))

  }, [data])
  useEffect(() => {
    AOS.init();
      AOS.refresh();
   }, [])
  function format(x){
    const image = {backgroundImage: `url(${x["thumbnail_url"]})` }
    const date = new Date(x['publish_date'])
   return <div className='pic-box' data-aos="flip-up" >
      <div className='pic' style={image}  >
        <div className="blur">
          <p> {x['title']} </p>
          <p className="date"> {  date.toDateString().slice(4)   } </p>
        </div>
      </div>
    </div>

  }
  return (
    <div className="App">
      <div id="wrap1">
        <div id='header1'>
          <div id='left-head'>
            <div className="logo" data-aos="zoom-in" data-aos-duration="900"> </div>
          </div>
          <div id="right-head">
            <div id="list"> 
              <a href='"javascript:void(0);"'>  Money Account </a>
              <a href='"javascript:void(0);"'>  Phunds </a>
              <a href='"javascript:void(0);"'>   Learn Money </a>
              <a href='"javascript:void(0);"'>  More </a>
              <a href='"javascript:void(0);"'>   Dondry Taylor </a>
            </div>
            <div className='logo'>
                <div className='icon'> </div>
            </div>
          </div>
        </div>
        <div id="top">
          <div id='top-left'>
            <div id='phone'  data-aos="zoom-in" data-aos-duration="900" ></div>
          </div>
          <div id='top-right'>
            <div className="contain">  
              <div className='wrap'> 
                <h1> NOT JUST A BANK</h1>
                <p>No overdraft or minimum balance fees.<sup>1</sup> Send and receive money.<sup>2</sup>  Get paid early.<sup>3</sup>  Achieve Money Goals.<sup>4</sup>  Learn money.<sup>5</sup> ...and <span>more</span>.</p>
              </div>
              <div id='input'> 
                <input type='email' placeholder='Enter email address'  value={value} onChange={(e)=> setValue(e.target.value)}   ></input>
                <span onClick={()=>setValue('')} > Sign Me Up</span> 
              </div>
              <div  className='downloads'>
                <a href='"javascript:void(0);"'> Download for IOS</a> <span> * </span>
                <a href='"javascript:void(0);"'> Download for Android</a><span> * </span>
                <a href='"javascript:void(0);"'> Why You Should Choose CapWay</a>
              </div>
            </div> 
          </div> 
        </div>
      </div>
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
              <div className='box' id='box3'data-aos="zoom-in" data-aos-duration="500" >
                <div className='pic' id='pic3' ></div>
                <p>Create and save money towards your Money Goals.</p>
              </div>
            </div>
            <button> See All Acount Features</button>
          </div>
      </div>
      <div id='wrap3'>
        <div className='inner'>
          <h2>Download CapWay and Start Your Money Account. </h2>
          <div >
           <div className ="download" id='first'></div>
           <div className ="download" id='second'></div>
          </div>
        </div>
        <div></div>
      </div>
      <div id='wrap5'>
        <div className='inner' >
          <div id='phunds' >
            <h2> Phunds: Financial Education Programs</h2>
            <p> Available to individuals, businesses, and organizations - including community organizations, schools, workforce, and municipalities. Increase your knowledge of money by learning from the 20+ financial topics covered in the different Phunds' programs.</p>
            <div className='btn'> <button> Find Out More </button></div>
          </div>
          <div id='pic4'  >
            <div className='img4'> </div>
          </div>
          <div id='money' >
            <h2> The Money Room</h2>
            <p> The master class of money. Engage and learn money from the financial teachings through our collaborations with brands and influencers.</p>
            <div className='btn'>   <button> Download App </button>  </div>
          </div>
        </div>
      </div>
      <div id="wrap6">
        <div className='inner'>
          <h2> Get to Know Money Better </h2>
          <div id='link-wrapper'>
            <div className='links' style={(data === 'shortarticle' )? liveLink: {visibility: "visible"}} onClick={()=> setData('shortarticle')}>  Articles</div>
            <div className='links' style={(data === 'video' )? liveLink: {visibility: "visible"}} onClick={()=> setData('video')} > Videos</div>
            <div className='links' style={(data === 'knowmoneyfacts' )? liveLink: {visibility: "visible"}} onClick={()=> setData('knowmoneyfacts')}> Facts & Hacks</div>
            <div className='links' style={(data === 'infograpics' )? liveLink: {visibility: "visible"}} onClick={()=> setData('infograpics')}> Infographics</div>
            <div className='links' style={(data === 'trending' )? liveLink: {visibility: "visible"}} onClick={()=> setData('trending')}> Money Meanings</div>
          </div>
          <div id='api'>
            {pic.map(format )}
          </div>
          <div className='btn'><button> Learn More About Money </button> </div>
        </div>
      </div>
      <div id='wrap4'>
        <div className='inner'>
          <p>As Featured In </p>
          <div id='list4' >
            <div className="icon" id='essence'> </div>
            <div className="icon" id='cnn'> </div>
            <div className="icon" id='bi'> </div>
            <div className="icon" id='inc'> </div>
            <div className="icon" id='forbes'> </div>
          </div>
        </div>
      </div>
      <div id="wrap7">
        <div className='inner'>
          <div id='top7'>
            <div className='wrapper'>

              <h3>Numbers Don't Lie</h3>
              <p> CapWay was created to provide fair financial access and opportunities to everyone, especially those misunderstood, overlooked, and underserved by the traditional banking system.</p>
              <p>Cashless, contactless, banking deserts - the way we bank and handle our finances is changing. Whether you are looking for your first debit card and Money Account or looking for a financial option with a mission to guide and assist you in your economic growth, CapWay is here. </p>
            </div>
          </div>
          <div id="bottom7">
            <div>
              <div className="card" id="one"></div>
              <div className="card" id="two"></div>
            </div>
            <div>
              <div className="card" id="three"></div>
              <div className="card" id="four"></div>
            </div>
          </div>

        </div>
      </div>
      <footer>
        <div id='foot1' >
          <div id='brand' >
            <div className='logo'>
              <div className='pic'> </div> 
            </div>
            <div id='socials'>
            <a href='"javascript:void(0);"'>  <div className='icons' id='fb'></div></a>
            <a href='"javascript:void(0);"'> <div className='icons' id='ig'></div></a>
            <a href='"javascript:void(0);"'> <div className='icons' id='tw'></div></a>
            <a href='"javascript:void(0);"'> <div className='icons' id='yt'></div></a>
            <a href='"javascript:void(0);"'> <div className='icons' id='ln'></div></a>
            </div>
          </div>
          <div id="site-map">
            <div className="foot-section">
              <strong>Company </strong><br/><br/>

              <p>About </p>
              <p>Events </p>
              <p>Shop </p>
              <p>Parts & Media </p>
              <p>Sign Up </p>
            </div>
            <div className="foot-section">
              <strong>Money Account </strong><br/><br/>

              <p>Open Account </p>
              <p>Benefits </p>
              <p>Why CapWay </p>
            </div>
            <div className="foot-section">
              <strong>Learn Money </strong><br/><br/>

              <p>Learn Money </p>
              <p>Phunds </p>
              <p>Money Room</p>
              <p> Request Content</p>
            </div>
            <div className="foot-section">
              <strong>WORK WITH CAPWAY</strong><br/><br/>

              <p> Partner </p>
              <p> Contributors</p>
              <p> Ambassador</p>
              <p> Career </p>
            </div>
            <div className="foot-section">
              <strong> SUPPORT </strong><br/><br/>

              <p> Legal </p>
              <p> FAQ </p>
              <p> Contact Us</p>
            </div>
            <div className="foot-section">
              <strong>DOWNLOAD </strong><br/><br/>

              <p>for IOS</p>
              <p> for Android </p>
            </div>
          </div>
        </div>
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
      </footer>
      <div  id="foot3" > 
          <p>© 2019-2022 CapWay Inc. All Rights Reserved. </p>
      </div>
    </div>
  );
}
export default App;
