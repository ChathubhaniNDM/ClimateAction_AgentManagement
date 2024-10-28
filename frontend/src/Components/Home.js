import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'
import {Link} from "react-router-dom";

function Home() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
      function getAgents() {
          axios.get("http://localhost:8070/Agent/").then((res) => {
              setAgents(res.data);
          }).catch((err) => {
              alert(err.message);
          })
      }
      getAgents();
  }, [agents])


  const deleteAgent = (id) =>{
      // alert(id)
      var answer = window.confirm("Are you sure")

  if(answer){
  axios.delete("http://localhost:8070/Agent/delete/"+id).then((res)=>{
          if(res.status===200){
              alert("Agent deleted")
              // getAgents()
          }
      })
}   
}
    return(
        
<body>

  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <img src="/image/planet.png" alt="img"/>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Services</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
            <li><a href="#ourteam" data-after="OurTeam">Our Team</a></li>
            <li><a href="/aat" data-after="Admin">Admin</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>




  <section id="hero">
  
    <div class="hero container">
      <div>
        <h1>Welcome <span></span></h1>
        <h1>To The <span></span></h1>
        <h1>Green Team<span></span></h1>
      </div>
    </div>
  
  </section>
  <div className='bg'>
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>
        <p>Green Planet offers a range of services aimed at promoting climate action and sustainability. Our Awareness Sessions educate communities about climate change and sustainable practices, while Community Clean-Up Projects engage volunteers in litter removal and habitat restoration. Through Tree Planting Initiatives, we distribute native saplings to increase green cover in various areas. Our Waste Collection Drives focus on collecting non-biodegradable waste, emphasizing proper disposal and recycling to encourage responsible waste management. Additionally, we distribute plants during our Plant Distribution Programs to promote home and community gardening. We also conduct Sustainable Living Workshops to teach practical skills in recycling, composting, and reducing plastic use for a more sustainable lifestyle. Lastly, our Partnership Development efforts collaborate with local entities to enhance climate action projects and maximize community impact.</p>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://plus.unsplash.com/premium_photo-1681131451639-b44b309b1125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /></div>
          <h2>Awareness Sessions</h2>
          <p>Our trained agents conduct engaging awareness sessions across various districts to educate communities about climate change, global warming, and sustainable practices. These sessions aim to empower individuals with knowledge and tools to take action for a healthier planet.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /></div>
          <h2>Community Clean-Up Projects</h2>
          <p>We organize regular clean-up drives in urban and rural areas, mobilizing local volunteers to remove litter and restore natural habitats. By fostering community involvement, we aim to create cleaner and greener spaces while instilling a sense of responsibility toward the environment.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://images.unsplash.com/photo-1581578017306-7334b15283df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /></div>
          <h2>Tree Planting Initiatives</h2>
          <p>We focus on increasing green cover by launching tree planting initiatives in rural and urban areas. Through partnerships with local organizations and schools, we distribute native saplings and educate participants about the importance of trees in combating climate change.</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_80ME7GUAKsecmbqHMA1ACqhXlyqz8UCMQ&s" /></div>
          <h2>Waste Collection Drives</h2>
          <p>Our agents coordinate efforts to collect non-biodegradable waste from communities, ensuring proper disposal and recycling. We provide resources and guidelines on waste segregation to promote responsible waste management practices.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Project 1</h1>
            <h2>Urban Clean-Up Campaign in Colombo</h2>
            <p>In an effort to tackle urban pollution, Green Planet organized a comprehensive clean-up campaign in Colombo. Local volunteers, schools, and community groups participated in the event, which resulted in the collection of over 500 kilograms of waste from public parks and streets. The project not only beautified the city but also raised awareness about the importance of keeping urban spaces clean and promoting responsible waste disposal practices.</p>
          </div>
          <div class="project-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6rSgXFGSAxMEGlm6O56sDa0fBxO189mdRg&s" alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 2</h1>
            <h2>Tree Planting Drive in Kandy</h2>
            <p>To enhance green cover and combat air pollution, Green Planet launched a tree planting drive in Kandy, focusing on planting native tree species. In collaboration with local schools, we involved students in planting over 1,000 saplings in community areas and school grounds. This project aimed to instill environmental stewardship in the younger generation while improving the local ecosystem.</p>
          </div>
          <div class="project-img">
            <img src="https://www.caritaslk.org/wp-content/uploads/2022/07/006.jpg" alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 3</h1>
            <h2>Plastic Waste Collection Drive in Jaffna</h2>
            <p>Addressing the critical issue of plastic pollution, Green Planet organized a plastic waste collection drive in Jaffna. Community members were encouraged to gather plastic waste from their neighborhoods, which was then collected and transported for proper recycling. The project successfully collected over 300 kilograms of plastic waste, highlighting the community's commitment to reducing plastic pollution and promoting environmental sustainability.</p>
          </div>
          <div class="project-img">
            <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 4</h1>
            <h2>Waste Segregation Awareness Program</h2>
            <p>Green Planet initiated a waste segregation awareness program in rural areas to educate communities about the importance of separating biodegradable and non-biodegradable waste. We conducted workshops and distributed informational pamphlets, reaching over 300 households. This project aimed to reduce landfill waste and encourage sustainable waste management practices in the community.</p>
          </div>
          <div class="project-img">
            <img src="https://imtmonline.com/wp-content/uploads/2022/02/web-cover-960x540-1.jpg" alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Project 5</h1>
            <h2>Community Garden Project in Galle</h2>
            <p>In Galle, we launched a community garden project that transformed a vacant lot into a vibrant garden space. Local residents were invited to participate in planting fruits, vegetables, and ornamental plants. This initiative not only provided fresh produce to the community but also fostered a sense of unity among residents and promoted the benefits of urban gardening.</p>
          </div>
          <div class="project-img">
            <img src="https://plus.unsplash.com/premium_photo-1667509241064-0fffd21b604f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  
 
  <section id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <img src="https://img.freepik.com/free-vector/save-world-illustration_24877-60159.jpg?w=740&t=st=1683563797~exp=1683564397~hmac=a67af1585b7d1ec9eef191f05993d109372142d20a19f53474c9c17e529a12da" alt="img"/>
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>Us</span></h1>
        <p>At Green Planet, we are dedicated to creating a sustainable future through impactful climate action initiatives. Founded by a passionate team of environmental advocates, our mission is to combat global warming, promote reforestation, and ensure responsible waste management across Sri Lanka.

          We believe that positive change begins at the community level. Our district-wise agents work tirelessly to engage local residents through awareness sessions, hands-on projects, and collaborative efforts. From organizing community clean-up campaigns to launching tree planting drives and educating communities about sustainable practices, we strive to empower individuals with the knowledge and tools needed to make a difference.

          Our projects are designed to foster a sense of responsibility toward the environment, encouraging people to take action for a greener, healthier planet. We are committed to transparency and collaboration, partnering with local organizations, schools, and governments to maximize our impact and reach.

          Join us in our mission to create a cleaner, greener world. Together, we can make a significant difference in the fight against climate change and work towards a sustainable future for generations to come.</p>
        <a href="/a" class="cta">Join with us</a>
      </div>
    </div>
  </section>
 
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+94 112 236 1234</h2>
            <h2>+94 112 226 1235</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>greenplanet@gmail.com</h2>
            <h2>greenplanet@geo.net</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>No.311,Bauddhaloka Mw,Colombo 07.</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="ourteam">
    <div className="ourteam container">
        <div className="ourteam-top">
            <h1 className="section-title"><span>O</span>ur<span>T</span>eam</h1>
            <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
        </div>
        <br /><br /><br />
        <h2 className="section-subtitle"><span>A</span>gents</h2>
        
        <div className="ourteam-bottom">
            {agents && agents.map(agent => (
                <div className="ourteam-item" key={agent.id}> {/* Make sure to add a unique key */}
                    <div className="icon"><img src={agent.image} alt={agent.fullname} /></div>
                    <h2 className="theme-color">{agent.fullname}</h2>
                    <h5 className="dark-color">E-mail: {agent.email}</h5>
                    <h5 className="dark-color">Contact No: {agent.phone}</h5>
                    <h5 className="dark-color">District: {agent.district}</h5>
                    <h5 className="dark-color">Description: {agent.description}</h5>  
                    
                </div>
            ))}
        </div>
    </div>
</section>

 
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>G</span>reen <span>P</span>lanet</h1>
      </div>
      <h2>Find us on</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=118497&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=48839&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=16713&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" /></a>
        </div>
      </div>
      <p>Copyright © 2023 GreenPlanet. All rights reserved</p>
    </div>
  </section>
  
  </div>
</body>



    )
}
export default Home;