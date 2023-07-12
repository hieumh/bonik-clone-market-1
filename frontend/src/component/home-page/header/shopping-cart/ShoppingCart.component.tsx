import { FC } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StyledIconButton from "@/common/button/StyledIconButon.component";

const ShoppingCart: FC = () => {
  return (
    <div>
      <StyledIconButton>
        <ShoppingBagIcon />
      </StyledIconButton>
    </div>
  );
};

export default ShoppingCart;