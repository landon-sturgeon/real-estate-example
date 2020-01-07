import React from "react";

import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import HomeImgGallery from "../../components/home-img-gallery/home-img-gallery.component";
import HomeList from "../../components/home-list/home-list.component";
import RealtorList from "../../components/realtor-list/realtor-list.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import SiteFeatures from "../../components/site-features/site-features.component";
import StoryImgGallery from "../../components/story-img-gallery/story-img-gallery.component";
import StoryText from "../../components/story-text/story-text.component";

import { LandingPageContainer } from "./landing-page.style";

const LandingPage = () => (
    <LandingPageContainer>
        <Sidebar />

        <Header />

        <RealtorList />

        <SiteFeatures />

        <StoryImgGallery />

        <StoryText />

        <HomeList />

        <HomeImgGallery />

        <Footer />

    </LandingPageContainer>
);

export default LandingPage;