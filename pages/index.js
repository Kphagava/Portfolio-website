import Head from 'next/head'
import Typing from '../components/typing';
import styles from '../styles/Home.module.css'

const Home = () => {
  return(
    <div class="landing">
    
        {/* <!-- Start of Page --> */}
        <div class = "welcomeView">
            <div class="container">
                <div class = "welcomeContent">
                    <div class = "animatedCont">
                      
                        <h3> <span class="animatedText"><Typing /></span><span class="cursor blinking">&nbsp;</span></h3>
                    </div>
                    <h1 class="landingMainFont">I’m Keti Phagava</h1>
                    <h4 class="colorPrimary jobTitle">UX/UI DESIGNER</h4>
                    <p class="landingText">I have been working as a UX/UI designer in gambling, 
                        software and banking industries. I’m open to new freelance 
                        and full-time projects and opportunities</p>
                    {/* <!-- Get in touch button --> */}
                    <a rel="noreferrer" href="https://www.linkedin.com/in/ketevan-phagava/" target= "_blank" class = "btnPrimary landingBtn">Get in touch
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <path id="Combined_Shape_Copy_3" data-name="Combined Shape Copy 3" d="M6.175,13.659a1.167,1.167,0,0,1,0-1.65l3.842-3.842H1.166a1.167,1.167,0,0,1,0-2.334h8.85L6.175,1.992A1.167,1.167,0,0,1,7.825.342l5.834,5.833.02.021.01.01.01.01.012.013.007.008.013.015.005.006.014.017,0,.005.014.018,0,0,.013.018,0,0,.013.018,0,.006.012.018,0,.007.01.016.005.009.008.014.007.012.006.011.009.016,0,.007.011.021v0a1.166,1.166,0,0,1-.24,1.359L7.825,13.659a1.167,1.167,0,0,1-1.65,0Z" fill="#fff"/>
                          </svg>                      
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- End of Page --> */}
    </div>
  )
}

export default Home;
