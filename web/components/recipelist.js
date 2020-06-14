import React from "react";
import Link from "next/link";

const RecipeList = (props) => {
  return (
    <li key={props._id}>
      <Link
        href={`/post/${props.type}/[slug]`}
        as={`/post/${props.type}/${props.slug}`}
      >
        <a>
          {props.mainImage && (
            <img
              className="h-48 lg:h-64 w-full object-cover object-center"
              src={props.url}
              alt="Food"
            />
          )}
          <div className="flex justify-center bg-white">
            <p className="font-sans self-center text-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
              {props.title}
              <span> &#9419;</span>
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default RecipeList;
