import React from "react";

import Sprite from "../../img/sprite.svg";

import { 
    SiteFeaturesContainer, 
    FeatureItem,
    FeatureIcon,
    FeatureText
 } from "./site-features.style";

 import { Heading4 } from "../../scss/_typography.style";

const SiteFeatures = () => (
    <SiteFeaturesContainer>
        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-global`}/>
            </FeatureIcon>
            <Heading4 >World's Best luxury homes</Heading4>
            <FeatureText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </FeatureText>
        </FeatureItem>

        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-trophy`}/>
            </FeatureIcon>
            <Heading4>Only the best properties</Heading4>
            <FeatureText>
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
            </FeatureText>
        </FeatureItem>

        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-map-pin`}/>
            </FeatureIcon>
            <Heading4>All homes in top locations</Heading4>
            <FeatureText>
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
            </FeatureText>
        </FeatureItem>

        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-key`}/>
            </FeatureIcon>
            <Heading4>New home in one week</Heading4>
            <FeatureText>
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </FeatureText>
        </FeatureItem>

        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-presentation`}/>
            </FeatureIcon>
            <Heading4>Top 1% realtors</Heading4>
            <FeatureText>
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.
            </FeatureText>
        </FeatureItem>

        <FeatureItem>
            <FeatureIcon>
                <use xlinkHref={`${Sprite}#icon-lock`}/>
            </FeatureIcon>
            <Heading4>Secure payments on this site</Heading4>
            <FeatureText>
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
            </FeatureText>
        </FeatureItem> 
    </SiteFeaturesContainer>
);

export default SiteFeatures;