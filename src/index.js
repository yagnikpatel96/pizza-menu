import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header(){
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Denn's Pizza Shop</h1>
    </header>
  )
}

function Menu(){
  const pizzas = pizzaData.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      { pizzas > 0 ? (
        <>
          <p>Providing our best Taste to our valuable customers. Delicious Dishes to choose from our Menu. made with all organic, our own Stone Oven & Love. </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.id}/>
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on to prepare the menu. Please come back later. sorry for the inconvenience. :)</p>
      )}      
    </main>
  )
}

function Pizza({pizzaObj}){
  return (
    <li className={` ${!pizzaObj.soldOut ? "pizza" : "pizza sold-out"} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} height="100" width="100"/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price+"$"}</span>
      </div>
    </li>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  if(!isOpen) return <p>Our shop will be open between {openHour} and {closeHour}. We are happy to serve you.</p>;

  return (
    <div className='footer'>
      {isOpen ? <Open closeHour={closeHour} openHour={openHour}/> : <Close openHour={openHour} closeHour={closeHour}/>}
    </div>
  )
}

function Open({closeHour,openHour}){
  return (
    <div className='order'>
      <p>We are Open from {openHour}:00 to {closeHour}:00. Please visit us or Order Online. Thanks. :)</p>
      <button className='btn'>Order Now</button>
    </div>
  )
}

function Close({closeHour,openHour }){
  return (
    <p>Our shop will be open between {openHour} and {closeHour}. We are happy to serve you.</p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);