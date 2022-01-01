import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Filter from "../components/Public/HomePage/Filter";
import PartnerByReligion from "../components/Public/HomePage/PartnerByReligion";
import RecentlyJoin from "../components/Public/HomePage/RecentlyJoin";
import { Provider } from 'react-redux'
import store from "../Redux";
import ReduxHoc from "./ReduxHoc";
const Home = () => (
  <>
  <Provider store={store}>
    <Head title="Home" />
    <Nav />
    <Filter />
    <PartnerByReligion />
    <RecentlyJoin />
    <Footer />
  </Provider>
  </>
);

export default Home;
