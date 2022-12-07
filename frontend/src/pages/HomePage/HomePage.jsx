import React from "react";
import { useEffect, useState, useRef } from "react";


import axios from "axios";
import LandingSection from "../../components/HomeComponents/LandingSection/LandingSection";
import ImageBar from "../../components/HomeComponents/ImageBar/ImageBar";

const HomePage = () => {
  const [products,SetProducts] = useState([])
  const [options,SetOptions] = useState([])
  const cookieRef = useRef()
  const cakeRef = useRef()
  const cupcakeRef = useRef()
  const goodiesRef = useRef()

  useEffect(() => {
    getProducts()
    getOptions()
    
  },[]);

  async function getProducts() {
    const response = await axios.get("http://127.0.0.1:8000/api/products/")
    SetProducts(response.data)
  }
  async function getOptions() {
    const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
    SetOptions(response.data)
  }


  return (
    <>
    <LandingSection />
    <ImageBar/>
    </>
    );
};

export default HomePage;
