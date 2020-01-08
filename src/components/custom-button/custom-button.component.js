import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({btnTitle}) => (
    <CustomButtonContainer>
        { btnTitle }
    </CustomButtonContainer>
);

export default CustomButton;