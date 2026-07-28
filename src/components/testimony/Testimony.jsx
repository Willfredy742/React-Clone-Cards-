import './Testimony.css';


const images = import.meta.glob('../../assets/img/*.png', {
  eager: true,
  import: 'default'
});

function Testimony(props) {
  return (
    <div className='containerTestimony'>
      <img
        className='imageTestimony'
        
        src={images[`../../assets/img/${props.image}.png`]}
        
        alt={`Photo of ${props.name}`}
      />

      <div className='testimonialTextContainer'>
        <p className='testimonialName'>
          
          <strong>{props.name}</strong> en {props.country}
        </p>

        <p className='testimonialPosition'>
        
          {props.post} en <strong>{props.company}</strong>
        </p>

        <p className='testimonialText'>
        
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Testimony;


