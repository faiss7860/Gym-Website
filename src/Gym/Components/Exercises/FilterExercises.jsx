import React, { useState } from "react";
import "../Exercises/Exercises.css";
import ExercisesData from '../Exercises/ExercisesData/ExercisesData'

const FilterExercises = () => {
  const [data, setData] = useState(ExercisesData);
  const filterResult = (workOut) => {
    const result = ExercisesData.filter((work) => {
      return work.bodyPart === workOut;
    });
    setData(result);
  };
  return (
    <div className="workOutBtn">

      <button onClick={() => {filterResult("Back");}}>Back</button>
      <button onClick={() => {filterResult("Biceps");}}>Biceps</button>
      <button onClick={() => {filterResult("Chest");}}>Chest</button>
      <button onClick={() => {filterResult("Triceps");}}>Triceps</button>
      <button onClick={() => {filterResult("Sholder");}}>Sholder</button>
      <button onClick={() => {filterResult("Coler");}}>Neck</button>
      <button onClick={() => {filterResult("Abs");}}>Abs</button>
      <button onClick={() => {filterResult("Leg");}}>Legs</button>
      <button onClick={() => {filterResult("Calf");}}>Calf</button>
      <button onClick={() => {filterResult("Cardio");}}>Cardio</button>
      <div>
        <div className="maincontainer">
          {data.map((value, index) => {
            return (
              <div className="workcard" key={index}>
                <div className="excard">
                  <img className="workimg" src={value.image} alt='img'/>
                  <h3 className="workname">{value.exercisName}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterExercises;
