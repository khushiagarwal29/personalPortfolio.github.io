import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <h1>About Me</h1>
      <div className="container">
      <h4>
          I am <span>Khushi Agarwal</span>
        </h4>
        <p className="paragraph">
          Hello Everyone👋, 
          I am B.Tech graduate who has completed her engineering in 2021. I am currently working as a <strong>Systems Engineer 
          at Tata Consultancy Servies</strong> for about <strong>3 years</strong>. 
          </p>
          <p className="paragraph">Over the past while, I've explored both web and backend development, 
          learning how to create websites that not only look good but also have strong, reliable backend systems 
          supporting them.
          </p>
          <p className="paragraph">
          In my role, I handle various technologies like Java, 
          HTML, CSS, AngularJS, ReactJS, PostgreSQL, Spring Boot, and Spring Framework to create websites and applications.
          I enjoy problem-solving and collaborating with others to create useful solutions.
          </p>

          <a href="https://drive.google.com/file/d/1xXK0rnmkOfeBWOj__kim2hjJzWG8r9eA/view" 
          target="_blank" rel="noopener noreferrer" class="resume">DOWNLOAD RESUME </a>
          
      </div>
    </div>
  )
}


