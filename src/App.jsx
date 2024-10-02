import {FaLinkedin, FaGithub, FaTwitter, FaMailBulk} from 'react-icons/fa';
import './App.css';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {

  /*******************  ProjectImg Side start******************/
  let logo = require("./Mylogo.png");
  let getLinkedProject = require("./getLinked.png");
  let ecommerceProject = require("./ecommerce.png");
  let glintProject = require("./glint1.png");
  let netFlixProject = require("./netFlix.png");
  /*******************  ProjectImg Side end ******************/

  /****************** Hamburger Toggle Mobile  ***************/
  const [isOpen, setisOpen] = useState(false);
  const show = () => setisOpen(!isOpen);
   /************** Hamburger Toggle Mobile  end***************/

  /******************** Form Handling ************************/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ppu7uih',
        'template_9rwonyg',
        form.current, {
        publicKey: 'g6_U8pehgOxx6JpKM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

return(
<div className="container" id='Home'>
  <header>
    <div id='logoContainer'>
      <a href="#container"><img src={logo} alt="Logo" id='logo'/></a>
      <span>KOKO.</span>
    </div>

    <div id='hamburgerContainer' className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={show}>
      <div id="hamburger"></div>

      <div className={`nav-menu ${isOpen ? "show" : ""}`}>
        <ol>
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </div>
    </div>

          <nav>
            <ul> 
              <li><a href="#Home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#project">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
        </header>

      <main>

      <div className='iconSideContainer'>
            <a href="https://www.linkedin.com/in/femi-5b6829267" target='blank' rel="noreferrer">
                <FaLinkedin  color='white' className='icon'/>
            </a>
            <a href="https://github.com/Kosisochii" target='_blank' rel="noreferrer">
              <FaGithub  color="white" className='icon'/>
            </a>
            <a href="https://x.com/kosiso03" target='_blank' rel="noreferrer">
              <FaTwitter color="white" className='icon'/>
            </a>
            <a href="mailto:kosisofrancis03@gmail.com" target='_blank' rel="noreferrer">
              <FaMailBulk color="white" className='icon'/>
            </a>
        </div>

        <section id='title'>

          <h1>Welcome</h1>
          <h2>I'M KOSISO EGUNGWU</h2>
          <p>A Result-Oriented Software Engineering and Full-Stack Developer.</p>

          <a href="#project">
            <button>PROJECTS</button>
          </a>

          <div className='mouseScroll'>
            <div id='mouse'></div>
          </div>
        </section>

        <section className ="about" id='about'>

          <div id='aboutContainer'>
              <h3>ABOUT ME</h3>
              <p>Here you will find more information about me, what i do, and my current skills mostly in terms of programming and technology</p>
          </div>

          <div id="skillSide">
            <div>
              <h4>Get to know me!</h4>

              <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>

              <p>Ialso like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</p>

              <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>

              <div>
                <button>CONTACT</button>
              </div>
            </div>

            <div id='skills'>
              <h4>My Skills</h4>

              <ol id='skillList'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Wordress</li>
                <li>PHP</li>
                <li>SASS</li>
                <li>GIT</li>
                <li>Github</li>
                <li>Terminal</li>
                <li>SEO</li>
                <li>Responsive Design</li>
              </ol>

            </div>
          </div>
        </section>

        <section id="project">
          <div className='project'>
            <h3>PROJECTS</h3>
            <p>Here you will find some of the personal and clients projects that i created with each project containing its own case study</p>
          </div>


          <div className='projectContainer'>
            <div className='projectImgContainer'>
              <img src={ecommerceProject} alt="Ecommerce Project"/>
            </div>
            <div className='projectContent'>
              <h4>GetLinked Project</h4>
              <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
              <button>CASE STUDY</button>
            </div>

          </div>

          <div className='projectContainer'>
            <div className='projectImgContainer'>
               <img src={getLinkedProject} alt="Getlinked Site"/>
            </div>

            <div className='projectContent'>
              <h4>Glint Project</h4>
              <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
              <button>CASE STUDY</button>
            </div>
          </div>


          <div className='projectContainer'>

            <div className='projectImgContainer'>
              <img src={glintProject} alt="Glint Project"/>
            </div>
            <div className='projectContent'>
              <h4>E-commerce Site</h4>
              <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
              <button>CASE STUDY</button>
            </div>

          </div>

          <div className='projectContainer'>
            <div className='projectImgContainer'>
              <img src={netFlixProject} alt="Netflix Project"/>
            </div>
            <div className='projectContent'>
              <h4>NetFlix Project</h4>
              <p>Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
              <button>CASE STUDY</button>
            </div>

          </div>
        </section>

        <div className='contactContainer' id='contact'>
        <section className='contactSection'>
          <div>
            <h3>CONTACT</h3>
            <p>Feel free to Contact me by submitting the form below and i will get back to you as soon as possible.</p>

            <div id='formContainer'>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="sender_name">Name</label>
                <input type="text" name='sender_name' placeholder='Enter Your Name' required/>

                <label htmlFor="sender_email">Email</label>
                <input type="email" name="sender_email" placeholder='Enter Your Email' required/>

                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder='Enter Your Message' required></textarea>

                <p id="submitContainer">
                  <button type="submit" name='Name'>SUBMIT</button>
                </p>
              </form>
            </div>
            </div>
        </section>
        </div>

      </main>


      <footer>
        <section className='footer'>

          <div id='socialContainer'>
            <h3>SOCIAL</h3>

            <div id='iconContainer'>
            <a href="www.linkedin.com/in/femi-5b6829267" target='blank' rel="noreferrer">
                <FaLinkedin  color='white' className='icon'/>
            </a>
            <a href="https://github.com/Kosisochii" target='_blank' rel="noreferrer">
              <FaGithub  color="white" className='icon'/>
            </a>
            <a href="https://x.com/kosiso03" target='_blank' rel="noreferrer">
              <FaTwitter color="white" className='icon'/>
            </a>
            <a href="mailto:kosisofrancis03@gmail.com" target='_blank' rel="noreferrer">
              <FaMailBulk color="white" className='icon'/>
            </a>
            </div>
          </div>

          <div id='footerPara'>
            <h3>Koko</h3>

            <p>A Full Stack Engineer building and maintaining Softwares that leads to the success of the overall product.</p>
          </div>
        </section>

        <article>© Copyright 2024 . Made by <span>Kosiso Egungwu</span>.</article>
      </footer>
    </div>
  )
}

export default App;