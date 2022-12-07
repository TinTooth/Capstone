import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
// Components
import LandingSection from "../../components/HomeComponents/LandingSection/LandingSection.jsx";
import ImageBar from "../../components/HomeComponents/ImageBar/ImageBar.jsx";
import ProductSection from "../../components/HomeComponents/ProductSection/ProductSection.jsx";

// IMAGES

import cake1 from "../../Images/cake1.jpeg";
import cake2 from "../../Images/cake2.jpeg";
import cake3 from "../../Images/cake3.jpeg";

const HomePage = () => {
  
  const [products,SetProducts] = useState([]);
  // const [options,SetOptions] = useState([]);
  const [cakeProducts,SetCakeProducts] = useState([]);
  const [cupcakeProducts,SetCupCakeProducts] = useState([]);
  const [cookieProducts,SetCookieProducts] = useState([]);
  const [goodieProducts,SetGoodieProducts] = useState([]);
  const [cakeImages] = useState([cake1,cake2,cake3])
  //  REFS
  const cookieRef = useRef();
  const cakeRef = useRef();
  const cupcakeRef = useRef();
  const goodiesRef = useRef();

  useEffect(() => {
    getProducts()
    // getOptions()
  },[]);

  useEffect(() => {
    seperateProducts()
  },[products]);

  async function getProducts() {
    const response = await axios.get("http://127.0.0.1:8000/api/products/")
    SetProducts(response.data)
  }
  // async function getOptions() {
  //   const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
  //   SetOptions(response.data)
  // }

  const seperateProducts = () => {
      let cookies = products.filter(p => p.type === "Cookies");
      SetCookieProducts(cookies);
      let cake = products.filter(p => p.type === "Cakes");
      SetCakeProducts(cake);
      let cupcakes = products.filter(p => p.type === "Cupcakes");
      SetCupCakeProducts(cupcakes);
      let goodies = products.filter(p => p.type ==="Goodies")
      SetGoodieProducts(goodies);
  }


  return (
    <>
    <LandingSection cookieRef={cookieRef} cakeRef = {cakeRef} cupcakeRef = {cupcakeRef} goodiesRef = {goodiesRef}/>
    <ImageBar/>
    <ProductSection thisref = {cakeRef} productData = {cakeProducts} images = {cakeImages} />
    <ProductSection thisref = {cupcakeRef} productData = {cupcakeProducts} images = {cakeImages} />
    <ProductSection thisref = {cookieRef} productData = {cookieProducts} images = {cakeImages} />
    <ProductSection thisref = {goodiesRef} productData = {goodieProducts} images = {cakeImages} />
    </>
    );
};

export default HomePage;
