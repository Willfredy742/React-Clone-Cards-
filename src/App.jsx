import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Testimony from "./components/testimony/Testimony";



function App(){
  return(
    <>
        <Header />
        
        <Testimony
        	name='Emma Bostian'
          country='Suecia'
          image='Emma'
          post='Ingeniera de Software'
          company='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />

        <Testimony
        	name='Shawn Wang'
          country='Singapur'
          image='Shawn'
          post='Ingeniero de software'
          company='Amazon'
          testimony="Da miedo cambiar de carrera. Solo gané confianza en que podía programar al trabajar con cientos de horas de lecciones gratuitas en freeCodeCamp. En un año conseguí un trabajo con salario de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />

        <Testimony
        	name='Sarah Chima'
          country='Nigeria'
          image='Sarah'
          post='Ingeniera de software'
          company='ChatDesk'
          testimony="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de nivel principiante total a un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble."
        />
        
        <Footer />
    </>
    
  )
}

export default App;

