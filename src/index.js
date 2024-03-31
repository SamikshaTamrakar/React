//Webpack which is the module bundler, in the project expects the entry point to be the index,js
import React from "react"; //importing module is part of javascript
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <h2>Pizza</h2>
      <img src={props.photoName} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <p>{props.price}</p>
    </div>
  );
}

function Header() {
  return <h1> First Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <Pizza
        name="Cheesi Spinachi"
        ingredient="Tomato,Spinach,Cheese"
        photoName="Pizzas/CheesePizza.jpg"
        price={250}
      />
      <Pizza
        name="Peporoni"
        ingredient="Peporoni"
        photoName="Pizzas/PizzzaPeporoni.jpg"
        price={200}
      />
    </div>
  );
}

function Footer() {
  return <h2>We are open!!!!</h2>;
}
//render the root in DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//React.render(<App/>)
