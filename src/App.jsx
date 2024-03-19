import "./App.css";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import data from "./assets/data.json";

function App() {
  // console.log(data[0].category);
  // console.log(data[0].images);
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Section datas={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
