import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}

export default App;
