import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { StoryTextContainer, StoryParagraph } from "./story-text.style";

import { Heading2, Heading3 } from "../../scss/_typography.style";

const StoryText = () => (
    <StoryTextContainer>
        <Heading3 marginBottom="small">
            Happy Customers
        </Heading3>
        <Heading2 marginBottom="medium">
            &ldquo;The best decision of our lives&rdquo;
        </Heading2>
        <StoryParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
        </StoryParagraph>
        <CustomButton btnTitle="Find your own home"/>
    </StoryTextContainer>
);

export default StoryText;