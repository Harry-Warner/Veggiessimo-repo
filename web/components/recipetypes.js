import React from "react";

const RecipeTypes = () => {
  return (
    <div className="mx-auto w-2/3 my-6 h-16 flex bg-lightPink justify-center items-center">
      <div className="flex justify-between">
        <div className="rounded-full border-solid border-2 border-blue" />
        <h2 className="px-4 font-sans text-center text-lg">Breakfast</h2>
      </div>
      <div className="flex justify-between">
        <div className="rounded-full border-solid border-2 border-blue" />
        <h2 className="px-4 font-sans text-center text-lg">Lunch</h2>
      </div>
      <div className="flex justify-between">
        <div className="rounded-full border-solid border-2 border-blue" />
        <h2 className="px-4 font-sans text-center text-lg">Dinner</h2>
      </div>
      <div className="flex justify-between">
        <div className="rounded-full border-solid border-2 border-blue" />
        <h2 className="px-4 font-sans text-center text-lg">Dessert</h2>
        <div className="rounded-full border-solid border-2 border-blue" />
      </div>
    </div>
  );
};

export default RecipeTypes;
