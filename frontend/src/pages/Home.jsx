import React from "react";
import Hero from "../components/Hero";
import JsInterective from "../components/JsForHome/JsInterective";
import Todo from "../components/todo/ToDo";

export default function Home() {

  return (
    <div className="w-full ">
      <Hero />
      <JsInterective />
        <Todo />
    </div>
  );
}
