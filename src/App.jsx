import {useState} from 'react';
import './App.css'
import {MainPage__cards} from './components/Mainpage__cards';

{/* id No. 1 images*/}
import mainImageOne from './assets/img/conFondo/km4444-cf1.jpg'
import secondaryImageOne from './assets/img/sinFondo/km4444-sf1.png'

{/* id No. 2 images*/}
import mainImageTwo from './assets/img/conFondo/km4444-cf2.jpg'
import secondaryImageTwo from './assets/img/sinFondo/km4444-sf2.png'

{/* id No. 3 images */}
import mainImageThree from './assets/img/conFondo/km4444-cf3.jpg'
import secondaryImageThree from './assets/img/sinFondo/km4444-sf3.png'

{/* id No. 4 images */}
import mainImageFour from './assets/img/conFondo/km4444-cf4.jpg'
import secondaryImageFour from './assets/img/sinFondo/km4444-sf4.png'

{/* id No. 5 images*/}
import mainImageFive from './assets/img/conFondo/km4444-cf5.jpg'
import secondaryImageFive from './assets/img/sinFondo/km4444-sf5.png'

{/* id No. 6 images
import mainImageSix from './assets/img/conFondo/'
import secondaryImageOne from './assets/img/sinFondo/km4444-sf1.png'*/}




const trenttinoProducts = [
  
  {
    id: 1,
    name: "Jersey Explorer",
    genre: "Unisex naranja",
    line: "Explorer",
    price: 142000,
    isNew: true,
    size:["XS", "S", "M", "L", "XL"],
    mainImage: mainImageOne,
    secondaryImage: secondaryImageOne,
  },
    
  {
    id: 2,
    name: "Jersey Explorer",
    genre: "Femenina Naranja",
    line: "Explorer",
    price: 142000,
    isNew: true,
    size:["XS", "L"],
    mainImage: mainImageTwo,
    secondaryImage: secondaryImageTwo,

  },

    
  {
    id: 3,
    name: "Jersey Origin",
    genre: "Unisex mostaza",
    line: "Origin",
    price: 106000,
    isNew: true,
    size:["L"],
    mainImage: mainImageThree,
    secondaryImage:secondaryImageThree,
  },

   
  {
    id: 4,
    name: "Jersey Explorer",
    genre: "Masculino verde",
    line: "Explorer",
    price: 142000,
    isNew: true,
    size:["M"],
    mainImage: mainImageFour,
    secondaryImage:secondaryImageFour,



  },
    
  {
    id: 5,
    name: "Jersey Garda",
    genre: "Masculino azúl",
    line: "Élite",
    price: 196000,
    isNew: true,
    size:["S"],
    mainImage: mainImageFive,
    secondaryImage:secondaryImageFive,

  }, 

  {
    id: 6,
    name: "Jersey Garda",
    genre: "Masculino azúl",
    line: "Élite",
    price: 196000,
    isNew: true,
    size:["XS"],
    mainImage: mainImageFive,
    secondaryImage:secondaryImageFive,

  }, 

  {
    id: 7,
    name: "Jersey Garda",
    genre: "Masculino azúl",
    line: "Élite",
    price: 196000,
    isNew: true,
    size:["M"],
    mainImage: mainImageFive,
    secondaryImage:secondaryImageFive,

  }, 

]

function App() {


  return (

    <>
      
      <div className='cards__container'>
        
        {trenttinoProducts.map(product => (
          <MainPage__cards
            key={product.id}
            name={product.name}
            genre={product.genre}
            line={product.line}
            price={product.price}
            isNew={product.isNew}
            size={product.size} // Join array elements with two spaces

            mainImage={product.mainImage}
            secondaryImage={product.secondaryImage}
          
          />
        ))}
        
        
        
      </div>



    </>
  )
}

export default App
