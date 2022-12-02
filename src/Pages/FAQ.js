import React, { Component } from 'react'
import '../components/prototype.css'
import '../components/faq.css'
import FAQQ from '../components/faq'


export default class FAQ extends Component {
  render() {
    return (
      <>
      <main className='mt-5'>
      
       
            <span class="line-text-faq"><h3>Frequently Asked Questions</h3></span>
                <div class="main-cont">
            <div class="dropdown">
                <button onclick="myFunction()" className="dropbtn">Fix a problem</button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Troubleshoot problems playing videos  </a>
                  <a href="#">Troubleshoot account issues </a>
                  <a href="#">Fix upload problems</a>
                  <a href="#">Fix House of the Dragon membership issues</a>
                  <a href="#">Get help with the Partner Programme</a>

                </div>
              </div>
              <div class="dropdown">
                <button onclick="myFunction1()" className="dropbtn">Watch videos</button>
                <div id="myDropdown1" className="dropdown-content">
                  <a href="#">Watch videos</a>
                  <a href="#">Find videos to watch</a>
                  <a href="#">Change video settings </a>
                  <a href="#">Watch videos on different devices </a>
                  <a href="#">Comment, subscribe and connect with creators </a>
                  <a href="#">Save or share videos and playlists </a>
                  <a href="#">Troubleshoot problems playing videos </a>
                </div>
              </div>
              <div class="dropdown">
                <button onclick="myFunction2()" class="dropbtn">Manage your account and settings</button>
                <div id="myDropdown2" class="dropdown-content">
                  <a href="#">Sign up and manage your account</a>
                  <a href="#">Manage account settings</a>
                  <a href="#">Manage privacy settings</a>
                  <a href="#">Manage accessibility settings</a>
                  <a href="#">Troubleshoot account issues</a>

                </div>
              </div>
              <div class="dropdown">
                <button onclick="myFunction3()" class="dropbtn">Supervised experience </button>
                <div id="myDropdown3" class="dropdown-content">
                  <a href="#">Understand your choices as a family</a>
                  <a href="#">What is a supervised experience?</a>
                  <a href="#">Get started with supervised accounts</a>
                  <a href="#">Set content settings for supervised experiences</a>
                  <a href="#">FAQ for parents about supervised accounts</a>
                  <a href="#">Info for creators about supervised experiences</a>
                  <a href="#">For children and families: What's a paid product placement?</a>

                </div>
              </div>
          
              <div class="dropdown">
                <button onclick="myFunction4()" class="dropbtn">Policy, safety and copyright</button>
                <div id="myDropdown4" class="dropdown-content">
                  <a href="#">Coronavirus disease 2019 (COVID-19) updates</a>
                  <a href="#">Community Guidelines</a>
                  <a href="#">Policy</a>
                  <a href="#">Reporting and enforcement</a>
                  <a href="#">Privacy and safety centre</a>
                  <a href="#">Copyright and rights management</a>
                </div>
              </div>
            </div>
            
            
        </main>
        </>
    )
  }
}
