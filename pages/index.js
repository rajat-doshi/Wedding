import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Document, { NextScript } from "next/document";
import NextHead from "next/head";
import { Slider } from "../components/Public";
import { AboutHome } from "../components/Public";
import Footer from "../components/footer";
import Filter from "../components/Public/HomePage/Filter";
import PartnerByReligion from "../components/Public/HomePage/PartnerByReligion";
import RecentlyJoin from "../components/Public/HomePage/RecentlyJoin";

export const MyContext = React.createContext({ Data: "sdfjgldf" });

const Home = () => (
  <>
    <MyContext.Provider value={{ name: "" }}>
      <Head title="Home" />
      <Nav />
      <Filter/>
     <PartnerByReligion/>
     <RecentlyJoin/>
      <Footer/>
    </MyContext.Provider>
  </>
);

export default Home;
