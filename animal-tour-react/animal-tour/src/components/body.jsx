import "./body.css";


export function Body({ index, prev, nxt, keyDown, randomBtn, currentAnimal }) {
  return (
    <>
      <main>
        
      <div className="main-img js-main" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentAnimal[index].img})`
      }}>
          <div className="name">
            {currentAnimal[index].name}
          </div>
          <div className="about">
           {currentAnimal[index].about}
           </div>

          <button className="right" onClick={prev} onKeyDown={keyDown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
          </button>

          <button className="left" onClick={nxt} onKeyDown={keyDown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
       
          <button class="random-btn js-random" onClick={randomBtn}>
            Random Animal
          </button>

      </div>

      <div className="grid">
        <div className="types">
          <h1>MAMMALS</h1>
          <p>
            Mammals are warm-blooded animals with hair or fur. Female mammals produce milk to feed their young, and most give birth to live babies. Example: Lion, Elephant, Dog, Cat, Whale, Bat etc.
          </p>
        </div>
        
        <div className="types">
          <h1>AVES (BIRDS)</h1>
          <p>
            Birds are warm-blooded animals with feathers, wings and beaks. Most birds can fly, and they lay eggs. Example: Eagle, Parrot, Chicken, Pigeon, Ostrich etc.
          </p>
        </div>

        <div className="types">
          <h1>REPTILIA (REPTILES)</h1>
          <p>
            Reptiles are cold-blooded animals with dry, scaly skin. Most lay eggs, and they breathe using lungs. Example: Snake, Crocodile, Lizard, Turtle etc.
          </p>
        </div>

        <div className="types">
          <h1>AMPHIBIA (AMPHIBIANS)</h1>
          <p>
            Amphibians are cold-blooded animals that usually live both in water and on land. They begin life in water with gills and leter develop lungs as adults. Example: Frog, Toad, Salamander, Newt etc.
          </p>
        </div>
        
        <div className="types">
          <h1>PISCES (FISH)</h1>
          <p>
            Fish are cold-blooded animals that live in water. They breathe through gills, have fins for swimming and most have scales. Example Tilapia, Shark, Salmon, Cartfish etc.
          </p>
        </div>

        <div className="types">
          <h1>INVERTEBRATES</h1>
          <p>
            Invertebrates are animals that do not have a backbone or spinal column. They are the largest group of animal on Earth. Example: Butterfly, Spider, Octopus, Crab, Jellyfish, Snail, Earthworm.
          </p>
        </div>
        
        
      </div>

      <footer>
       <h3>About Animal Tour</h3>
       <p>
        Animal Tour is an educational web application designed to help users explore the facinating world of animals. Browse different animal classes, learn their habitats, diets, scientific classifications, and unique characteristics through an interactive and easy-to-use interface.
       </p>
       <p>
        Built with React and JavaScript to provide an engaging learning experience for students, teachers, and wildlife enthusiasts.
       </p>
       <p>
        &copy; 2026 Animal Tour. All rights reserved.
       </p>
     </footer>


      </main>
    </>
  )
}