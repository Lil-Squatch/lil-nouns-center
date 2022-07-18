/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Script from "next/script";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <Header title="Lil Nouns Center" />
      <Hero />
    </>
  );
}
