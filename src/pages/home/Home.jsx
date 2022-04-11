import React from 'react'
import Form from '../../components/form/Form'
import { useState} from 'react';
import axios from 'axios';
import {ImgDiv, HomeImg, MainContainer} from "./HomeStyles";
import homeSvg from "../../assets/home.svg"
import Cards from './Cards';

const app_ıd = "e0e7637e";
const app_key = "e4e4e393de104f41905b8c706b713a3f";

function Home() {
  const [data, setData] = useState();
  const [query, setQuery] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_ıd}&app_key=${app_key}&mealType=${meal}`;

  const getData = async () => {
    const result = await axios.get(url);
    setData(result.data.hits);
    console.log(data);
  }

 

  return (
    <div>
        <h1 style={{textAlign: "center", marginTop:"3rem", fontSize:"3rem"}}>Food App</h1>
        <Form 
        setQuery ={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        />

        {data ? 
        <MainContainer>
          {data.map((item,index) => (
            <Cards key={index} recipe ={item.recipe}/>
          ))}
        </MainContainer>
        :
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
        }
    </div>
  )
}

export default Home