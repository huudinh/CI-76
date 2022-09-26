import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }} >
        <Header />
        <div style={{ display: 'flex', flex:1, alignItems: 'stretch' }}>
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
