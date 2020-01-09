import React from "react";

import realtor1 from "../../img/realtor-1.jpeg";
import realtor2 from "../../img/realtor-2.jpeg";
import realtor3 from "../../img/realtor-3.jpeg";

import { Heading3 } from "../../scss/_typography.style";

import { 
    RealtorListContainer, Realtors, RealtorContainer,
    RealtorImage, RealtorName, HomesSold, RealtorInfoBox
} from "./realtor-list.style";

const RealtorList = () => (
    <RealtorListContainer>
        <Realtors>
            <Heading3>top 3 realtors</Heading3>
            <RealtorContainer>
                <RealtorImage src={realtor1} alt="realtor1" />
                <RealtorInfoBox>
                    <RealtorName>Ted Mosby</RealtorName>
                    <HomesSold>244 Home Sold</HomesSold>
                </RealtorInfoBox>
            </RealtorContainer>

            <RealtorContainer>
                <RealtorImage src={realtor2} alt="realtor2" />
                <RealtorInfoBox>
                    <RealtorName>Janet Janetson</RealtorName>
                    <HomesSold>2,100 Home Sold</HomesSold>
                </RealtorInfoBox>
            </RealtorContainer>

            <RealtorContainer>
                <RealtorImage src={realtor3} alt="realtor3" />
                <RealtorInfoBox>
                    <RealtorName>Sir Arthur Peddlebottom</RealtorName>
                    <HomesSold>44 Home Sold</HomesSold>
                </RealtorInfoBox>
            </RealtorContainer>
        </Realtors>
    </RealtorListContainer>
);

export default RealtorList;