import React from "react";

import Story1 from "../../img/story-1.jpeg";
import Story2 from "../../img/story-2.jpeg";

import { StoryImgGalleryContainer, StoryImgLarge, StoryImgOffsetRight } from "./story-img-gallery.style";

const StoryImgGallery = () => (
    <StoryImgGalleryContainer>
        <StoryImgLarge src={Story1} alt="couple with new house" />
        <StoryImgOffsetRight src={Story2} alt="new house" />
    </StoryImgGalleryContainer>
);

export default StoryImgGallery;