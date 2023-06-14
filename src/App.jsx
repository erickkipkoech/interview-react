import { useState } from 'react';
import Right from './components/right';
import Left from './components/left';

function App() {
  

  return (
    <main className="flex min-h-screen flex-row bg-sky-100 p-2">
      <Right />
      <Left/>
    </main>
  )
}

export default App
