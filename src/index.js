import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


let books=[
  {
  id:1,
  title:"Invisible Child",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-invisble-child.jpg",
  author:"Andrea Elliot",  
  edition:1,
  pages:"210"
},
{
  id:2,
  title:"1000 Years of joys and sorrows",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-1000-years-of-joys-and-sorrors.jpg",
  author:"Ai Weiwei",
  edition:1,
  pages:"400"

},
{
  id:3,
  title:"Beautiful world, Where are you",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-beautiful-world-where-are-you.jpg",
  author:"Sally Rooney",
  edition:1,
  pages:"337"

}]


ReactDOM.createRoot(document.getElementById('root')).render(<App books={books}/>);
