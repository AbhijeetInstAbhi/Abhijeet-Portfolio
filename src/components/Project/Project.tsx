import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="https://github.com/AbhijeetInstAbhi" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.apogee.geomaster" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Survey App</h3>
              <p>
              This application is based on GIS System. This app helps with measuring stake point, topo points with the use of
Bluetooth low energy (BLE).
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Java</li>
                <li>BLE</li>
                <li>SQLite</li>
                <li>GIS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AbhijeetInstAbhi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                 </div>
            </header>
            <div className="body">
              <h3>Google Play Protect</h3>
              <p> I leverage my expertise in reverse engineering and cyber security (CIS) to analyze applications on the Google Play
Store. This involves deconstructing apps (breaking them down to pure code) to identify potential vulnerabilities
and malicious behavior. By uncovering these vulnerabilities, I contribute to the efforts of banning harmful
applications from the Play Store, ultimately protecting users. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Android</li> <li>Java</li> <li>Kotlin</li> <li>Reverse Engineering</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AbhijeetInstAbhi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Aliis: A Nexoptic Project</h3>
              <p>
              Developed a professional camera application leveraging Camera2 API. The app captures RAW files (DNG, .jpeg,
ppm) and allows adjustments for ISO, exposure, and aperture. Burst photo mode is also included.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Kotlin</li>
                <li>Camera2api</li>
                <li>RoomDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/AbhijeetInstAbhi" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.panasonic.tracker" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Seekit by Panasonic</h3>
              <p>
              Contributed to Panasonic’s SeekIT app, a solution for tracking valuables. Implemented root detection using NDK,
employing C++ and AIDL files to identify devices rooted with Magisk.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>java</li>
                <li>BLE</li>
                <li>Google Maps</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AbhijeetInstAbhi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              
              </div>
            </header>
            <div className="body">
              <h3>Android IMS Simulation</h3>
              <p>This project involved modifying the open-source LineageOS for enhanced functionality. I configured the OS and
made essential adjustments to enable Voice over IP (VoIP) capabilities through the IMS application. This involved
establishing calls and messaging functionality over an IP network.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Telephony</li>
                <li>Android</li>
                <li>Java</li>
                <li>AOSP</li>
                <li>AIDL</li>
                <li>VOIP</li>
                <li>RIL</li>
                <li>ADB Shell</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/AbhijeetInstAbhi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.pulp.Strattendance" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Strattendance</h3>
              <p>This application is being used by the office employee to mark their attendance using QR without any physical
touch. This application also helps them to sync their attendance with greytHR.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Java</li>
                <li>RoomDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="https://github.com/AbhijeetInstAbhi" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.pulp.bridgesmart" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Bridgestone BridgeSmart</h3>
              <p>
              A digitally enabled sales tool that empowers Bridgestone sales representatives to meet customers requirements
better. It allows them to recommend the right product to help enhance the efficiency of customers fleet operations
and shows the TCO savings.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Java</li>
                <li>Kotlin</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="https://github.com/AbhijeetInstAbhi" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                
              </div>
            </header>
            <div className="body">
              <h3>E-challan 2.0</h3>
              <p>
              This application is being used by the Madhya Pradesh Police to avoid the tedious pen and paper method of making
challan. This application helps them to generate challan over the mobile phone making it quick and easy to work.

              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Java</li>
                <li>SQLite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> 

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="https://github.com/AbhijeetInstAbhi" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
               
              </div>
            </header>
            <div className="body">
              <h3>Padlock App</h3>
              <p>
              This application is a way to innovate. It helps you with getting done with the traditional lock and key method,
with this app you can open the locks with a click in the phone using Bluetooth low energy
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>Java</li>
                <li>BLE</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}