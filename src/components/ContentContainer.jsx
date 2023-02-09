import Banner from './Banner.jsx';
import GPT3API from './GPT3API.jsx';

export default function ContentContainer () {
  const id = "ContentContainer";
  return(
    <div id={id}>

      <Banner 
          linkTitle=""
          text=""
          link="#"
          image='images/chataius-low-resolution-logo-color-on-transparent-background.png'         
      />
      
      <GPT3API />
      
    </div>
    
  );

  
}