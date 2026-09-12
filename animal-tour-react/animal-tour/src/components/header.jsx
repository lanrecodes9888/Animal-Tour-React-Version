import { useEffect, useState } from "react";
import "./header.css";

export function Header( {filter, selected, inputAnimal, inputText, keyDown, searchAnimal} ) {
  const [isDark, setIsDark] = useState(false); 
  
  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
  }, [isDark]);

  function handleTheme() {
    setIsDark(!isDark);
  }

  
 
  return(
    <>
      <nav>
        <div className="div">
          <input type="text" 
            placeholder="Search animal" 
            onChange={inputAnimal}
            onKeyDown={keyDown}
            autoFocus
            value={inputText}
          />

          <button className="search-btn" onClick={searchAnimal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
           </svg>
          </button>

        <button className="theme" onClick={handleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
          </svg>

        </button>
  
          <div 
            onClick={() => filter('all')} 
            className={selected === 'all' ? 'active' : ''} 
          >All</div>

          <div 
            onClick={() => filter('mammal')} 
            className={selected === 'mammal' ? 'active' : ''} 
          >Mammals</div>

          <div 
          onClick={() => filter('bird')} 
          className={selected === 'bird' ? 'active' : ''} 
          >Birds</div>

          <div 
            onClick={() => filter('reptile')} 
            className={selected === 'reptile' ? 'active' : ''} 
          >Reptiles</div>
        
          <div 
            onClick={() => filter('amphibian')} 
            className={selected === 'amphibian' ? 'active' : ''} 
          >Amphibians</div>

          <div 
            onClick={() => filter('fish')}
            className={selected === 'fish' ? 'active' : ''} 
          >Fishes</div>

          <div 
            onClick={() => filter('invertebrate')}
            className={selected === 'invertebrate' ? 'active' : ''} 
          >Invertebrates</div>

        </div>
      </nav>

    </>
  );
}