import "./Job.css";
function Jobsicker() {
  return (
    <div className="container">
      <nav>
        <div className="logo_container">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
        <path d="M0.302633 22.3487C0.302634 10.4746 -0.378288 -1.95637e-06 0.302635 -1.89684e-06C12.2858 -8.49246e-07 22 9.62588 22 21.5C22 33.3741 12.2858 43 0.302631 43C0.302631 43 0.302632 34.2228 0.302633 22.3487Z" fill="#1A1A1A"/>
        <path d="M43.6974 20.6513C43.6974 32.5254 44.3783 43 43.6974 43C31.7142 43 22 33.3741 22 21.5C22 9.62588 31.7142 0 43.6974 0C43.6974 0 43.6974 8.77719 43.6974 20.6513Z" fill="#1A1A1A"/>
        </svg>
        </div>

        <div className="menu_container">
        <ul>
          <li>
            <a href="www.ziontutorial.com" className="active">Products</a>
          </li>
          <li>
            <a href="www.ziontutorial.com">Solution</a>
          </li>
          <li>
            <a href="www.ziontutorial.com"> Pricing</a>
          </li>
          <li>
            <a href="www.ziontutorial.com"> Contact</a>
          </li>
        </ul>
        </div>
        
        <div className="btn_container">        
        <button className="btn">
         Log In
        </button>     
        </div>      
      </nav>

      {/* hero section */}
      <div className="content">
        <div class="hero-text">
        <p className="content_para">Trusted by over 2800+ companies</p>
        <h1>Find Your <span className="content_span">Remote Job</span></h1>
        <h1>Easy And Fast.</h1>
        <p className="content_alice">A Platform where you can get your desired job without any hasse</p>
        <form>
          <input type="text" placeholder="Your Email Address" />
          <button type="submit" className="btn_sec">
            Submit
          </button>
        </form>
      </div>
      </div>
      <p></p>
    </div>
  );
}
 
export default Jobsicker;
 