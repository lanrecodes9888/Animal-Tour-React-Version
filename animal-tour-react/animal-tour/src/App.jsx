import { useState } from 'react';
import { animalsInfo } from "./data/data.js";
import { Header } from "./components/header.jsx"
import { Body } from "./components/body.jsx"

function App() {
  const [index, setIndex] = useState(0);
  const [currentAnimal, setCurrentAnimal ] = useState(animalsInfo)
  const [selected, setSelected] = useState('all');
  const [inputText, setInputText] = useState(''); 
  

 
    function nxt() { 
      
        if (index === currentAnimal.length - 1) {
         setIndex(0);
        } else {
        setIndex(index + 1);
        }
      
    }
  
    function prev() {
        if (index === 0) {
         setIndex(currentAnimal.length - 1);
        } else {
        setIndex(index - 1);
        }
      
    }

    function filter(type) {

       if (type === 'all') {
         setSelected(type)
         setCurrentAnimal(animalsInfo);
         setIndex(0)
       } else  {
         setSelected(type)
         setCurrentAnimal( animalsInfo.filter(info => info.type === type));
         setIndex(0)
       } 
/*
       if (type === 'all') {
         setCurrentAnimal(animalsInfo);
         setIndex(0)
       } else if (type === 'mammals') {
        setCurrentAnimal( animalsInfo.filter(info => info.type === 'mammal'));
         setIndex(0)
       } else if (type === 'birds') {
         setCurrentAnimal( animalsInfo.filter(info => info.type === 'bird'));
         setIndex(0)
       } else if (type === 'reptiles') {
         setCurrentAnimal( animalsInfo.filter(info => info.type === 'reptile'));
         setIndex(0)
       } else if (type === 'amphibians') {
         setCurrentAnimal( animalsInfo.filter(info => info.type === 'amphibian'));
         setIndex(0)
       } else if (type === 'fishes') {
         setCurrentAnimal( animalsInfo.filter(info => info.type === 'fish'));
         setIndex(0)
       } else if (type === 'invertebrates') {
         setCurrentAnimal( animalsInfo.filter(info => info.type === 'invertebrate'));
         setIndex(0)
       }
  */

     }

    function randomBtn() {
      setIndex(Math.floor(Math.random() * currentAnimal.length));
      
    }

    function inputAnimal(e) {
      setInputText(e.target.value.toUpperCase())
    }

    function searchAnimal() {
      const searchAnimal = animalsInfo.filter((animal) => animal.name.includes(inputText));

      if (searchAnimal.length === 0) {
        alert("Invalid Animal or Animal not found")
         setInputText("")
      }else {
        setCurrentAnimal(searchAnimal)
        setIndex(0)
        setInputText("")
      }
     
      
    }

    function keyDown(e) {
      if(e.key === "Enter") {
        searchAnimal()
      } else if(e.key === "ArrowLeft") {
        prev()
      } else if(e.key === "ArrowRight") {
        nxt()
      }
    }


  return (
    <>
      <Header 
        filter={filter}
        selected={selected} 
        inputAnimal={inputAnimal}
        inputText={inputText}
        searchAnimal={searchAnimal}
        keyDown={keyDown}
      />
      <Body 
        index={index}
        prev={prev} 
        nxt={nxt}
        keyDown={keyDown}
        randomBtn={randomBtn}
        currentAnimal={currentAnimal}
      />
    </>
  )
}

export default App
