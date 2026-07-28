
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";



function App(){
  return(
    <>
        <Header />
        
        <Testimony
        	name='Emma Bostian'
          country='Suecia'
          images='emma'
          post='Ingeniera de Software'
          company='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        
        <Footer />
    </>
    
  )
}

export default App;

