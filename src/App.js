import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setpeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h2>{people.length} People Birthday</h2>
        <List people={people} />
        <button onClick={() => { setpeople([]) }}>Clear all</button>
        <button onClick={() => { setpeople(['ali']) }}>Add pepole</button>
      </section>
    </main>
  )
}

export default App;
