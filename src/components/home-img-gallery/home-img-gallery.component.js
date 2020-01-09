import React from "react";

import Gal1 from "../../img/gal-1.jpeg";
import Gal2 from "../../img/gal-2.jpeg";
import Gal3 from "../../img/gal-3.jpeg";
import Gal4 from "../../img/gal-4.jpeg";
import Gal5 from "../../img/gal-5.jpeg";
import Gal6 from "../../img/gal-6.jpeg";
import Gal7 from "../../img/gal-7.jpeg";
import Gal8 from "../../img/gal-8.jpeg";
import Gal9 from "../../img/gal-9.jpeg";
import Gal10 from "../../img/gal-10.jpeg";
import Gal11 from "../../img/gal-11.jpeg";
import Gal12 from "../../img/gal-12.jpeg";
import Gal13 from "../../img/gal-13.jpeg";
import Gal14 from "../../img/gal-14.jpeg";

import { 
    HomeImgGalleryContainer, GalleryImage 
} from "./home-img-gallery.style";

const HomeImgGallery = () => (
    <HomeImgGalleryContainer>
        <GalleryImage imgNum="one" src={Gal1} alt="Gallery image 1"/>
        <GalleryImage imgNum="two" src={Gal2} alt="Gallery image 2"/>
        <GalleryImage imgNum="three" src={Gal3} alt="Gallery image 3"/>
        <GalleryImage imgNum="four" src={Gal4} alt="Gallery image 4"/>
        <GalleryImage imgNum="five" src={Gal5} alt="Gallery image 5"/>
        <GalleryImage imgNum="six" src={Gal6} alt="Gallery image 6"/>
        <GalleryImage imgNum="seven" src={Gal7} alt="Gallery image 7"/>
        <GalleryImage imgNum="eight" src={Gal8} alt="Gallery image 8"/>
        <GalleryImage imgNum="nine" src={Gal9} alt="Gallery image 9"/>
        <GalleryImage imgNum="ten" src={Gal10} alt="Gallery image 10"/>
        <GalleryImage imgNum="eleven" src={Gal11} alt="Gallery image 11"/>
        <GalleryImage imgNum="twelve" src={Gal12} alt="Gallery image 12"/>
        <GalleryImage imgNum="thirteen" src={Gal13} alt="Gallery image 13"/>
        <GalleryImage imgNum="fourteen" src={Gal14} alt="Gallery image 14"/>
    </HomeImgGalleryContainer>
);

export default HomeImgGallery;