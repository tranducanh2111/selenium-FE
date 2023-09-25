import React, { useState, Fragment } from "react";
import Head from "next/head";
import Header from "@/components/NavBar/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

// import FilteredListPanelSection from "@/page-sections/HomePage/FilteredListPanelSection";
import WorkshopSection from "@/page-sections/HomePage/WorkshopSection";
// import BlockSection from "@/page-sections/HomePage/BlockSection";
// import TestimonialsSection from "@/page-sections/HomePage/TestimonialSection";
// import ArticleListSection from "@/page-sections/HomePage/ArticleListSection";
// import ContactSection from "@/page-sections/HomePage/ContactSection";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Selenium</title>
      </Head>
      <Header/>
      <main>
        <div id="homepage" className="sm:pl-[70px] space-y-16">
          <Banner/>
          <WorkshopSection />
          {/* <FilteredListPanelSection />
          
          <BlockSection />
          <TestimonialsSection />
          <ArticleListSection />
          <ContactSection /> */}
        </div>
      </main>
      <Footer/>
    </Fragment>
  );
};

export default Home;
