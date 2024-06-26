import {FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaYahoo} from 'react-icons/fa';
import './App.css';
// import gsap from "gsap";
// import {useGSAP} from "@gsap/react";

function App() {

  let hamburger = require("./hamburger.png");

  function show(){
    console.log("Clicked");
  }

  return(

    <div className="container">
        <header>
          <div id='logoContainer'>
            <a href="#">Koko</a>
          </div>

          <div id='hamburger'>
            <img src={hamburger} alt="Hamburger Icon"onClick={show}/>
          </div>

          <nav>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>

      <main>

        <section id='title'>

          <h1>Welcome</h1>
          <h2>HI, I'M KOSISO EGUNGWU</h2>
          <p>A Result-Oriented Software Engineering and Full-Stack Developer.</p>

          <button>PROJECTS</button>
        </section>

        <section className ="about">

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

        {/* <section id="project">
          <h3>PROJECTS</h3>
          <p>Here you will find some of the personal and clients projects that i created with each project containing its own case study</p>
        </section> */}

        <div className='contactContainer'>
        <section className='contactSection'>
          <div>
            <h3>CONTACT</h3>
            <p>Feel free to Contact me by submitting the form below and i will get back to you as soon as possible.</p>

            <div id='formContainer'>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Your Name'/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter Your Email'/>

                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder='Enter Your Message'></textarea>

                <p id="submitContainer">
                  <button type="submit">SUBMIT</button>
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
                <a href="www.linkedin.com/in/femi-5b6829267">
                  <FaLinkedin  color='white' className='icon'/>
                </a>
                <FaGithub  color="white" className='icon'/>
                <FaTwitter color="white" className='icon'/>
                <FaYoutube color="white" className='icon'/>
                <a href="mailto:kosisofrancis03@gmail.com">
                  <FaYahoo color="white" className='icon'/>
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