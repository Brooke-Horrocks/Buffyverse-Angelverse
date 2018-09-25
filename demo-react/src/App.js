import React from 'react'

// Import our components
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  return (
      <div>
          <Header />
          <Section />
          <Footer />
      </div>
  )

  // **THIS IS NOT A CONSTRUCTOR!!**
  //App is capitalized because it is a component
}

export default App;