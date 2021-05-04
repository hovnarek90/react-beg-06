import styles from "./about.module.css";




const About = () => {
  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <h1>
        About me
        </h1>
        <p> Name  Narek  
          <br/> 
          Surname  Hovhannisyan
          <br/>
          E-mail hovnarek@gmail.com

           
        </p>
        <h2>I am an allround web developer. I am a programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.

</h2>
      </div>
    </div>
  )
}

export default About;