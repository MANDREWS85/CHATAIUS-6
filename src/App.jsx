import './App.css';
import Banner from './components/Banner.jsx';
import GPT3API from './components/GPT3API.jsx';


export default function App() {
  const id="App";
  return (
    <main id={id}>
      
      <Banner 
          linkTitle="SITE TITLE"
          text="SITE DESCRIPTION"
          link="#"
          image=''          
      />
      
      <GPT3API />
      
    </main>
  )
}
