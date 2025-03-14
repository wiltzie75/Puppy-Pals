import { useState } from 'react'
import {puppyList} from "./data.js";

function App() {

const [puppies, setPuppies] = useState(puppyList);
console.log(puppies);

  return (
    <>
      <div>

      </div>
      <h1>Puppy Pals</h1>
      <div className="card">
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
