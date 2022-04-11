import React from 'react';
import {FormContainer, FoodInput, Button, Select} from "./FormStyles"

function Form({setQuery, getData, mealTypes, setMeal}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        getData()
    }


  return (
    <div>
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput 
            type="text"
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
             />
            <Button type='submit' >Search</Button>
            <Select name='mealTypes' id='mealTypes' onChange={(e) => setMeal(e.target.value)}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">TeaTime</option>
            </Select>
        </FormContainer>
    </div>
  )
}

export default Form