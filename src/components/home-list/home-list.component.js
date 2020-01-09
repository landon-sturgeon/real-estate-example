import React from "react";

import Sprite from "../../img/sprite.svg";
import Home1 from "../../img/house-1.jpeg";
import Home2 from "../../img/house-2.jpeg";
import Home3 from "../../img/house-3.jpeg";
import Home4 from "../../img/house-4.jpeg";
import Home5 from "../../img/house-5.jpeg";
import Home6 from "../../img/house-6.jpeg";

import { 
    HomeListContainer, HomeCard, HomeImg, HomeLikeIcon,
    HomeDetailIcon, HomeName, HomeDetail, HomeDetailText,
    HomeButton
} from "./home-list.style";

const HomeList = () => (
    <HomeListContainer>
        <HomeCard>
            <HomeImg src={Home1} alt="House 1" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Beautiful Family House</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>USA</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>5 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>2000 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$1,200,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

        <HomeCard>
            <HomeImg src={Home2} alt="House 2" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Modern Glass Villa</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>Canada</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>6 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>4000 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$2,750,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

        <HomeCard>
            <HomeImg src={Home3} alt="House 3" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Cozy Country House</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>UK</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>4 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>3000 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$850,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

        <HomeCard>
            <HomeImg src={Home4} alt="House 4" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Large Rustic Villa</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>Portugal</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>6 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>5500 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$1,950,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

        <HomeCard>
            <HomeImg src={Home5} alt="House 5" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Majestic Palace House</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>Germany</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>18 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>9500 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$9,500,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

        <HomeCard>
            <HomeImg src={Home6} alt="House 6" />
            <HomeLikeIcon>
                <use xlinkHref={`${Sprite}#icon-heart-full`} />
            </HomeLikeIcon>
            <HomeName>Modern Family Apartment</HomeName>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-map-pin`} />
                </HomeDetailIcon>
                <HomeDetailText>Italy</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-profile-male`} />
                </HomeDetailIcon>
                <HomeDetailText>3 rooms</HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-expand`} />
                </HomeDetailIcon>
                <HomeDetailText>1200 ft<sup>2</sup></HomeDetailText>
            </HomeDetail>

            <HomeDetail>
                <HomeDetailIcon>
                    <use xlinkHref={`${Sprite}#icon-key`} />
                </HomeDetailIcon>
                <HomeDetailText>$600,000</HomeDetailText>
            </HomeDetail>
            <HomeButton>Contact Realtor</HomeButton>
        </HomeCard>

    </HomeListContainer>

    
);

export default HomeList;