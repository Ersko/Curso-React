
import './styles.css';
import PropTypes from 'prop-types'

const newMessage = {
  message:'Hello World',
  title:'Esteban'
};

function getTitle() {
  return newMessage.title;
}

const getResult = (a,b) => {
  return a+b;
}

export const FirstApp = ( {title , subTitle, name}) => {
  
  return (
    <> 
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    
    </> 


  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
  name: 'Esteban',
  subTitle: 'subTitle not found',
  //title: 'title not found',
}