import "./Shopsmall.css"
import MenuPopper from "./Popover";
import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"


function Smallshop(){

    const { lang } = useContext(CartContext);

    return (
        <div className="SSDiv">

{lang==="swe" ? (<>
            <h1>Butik</h1>
            <p>Handgjorda produkter i gediget material.</p>
            </>
        ) : (
          <>
            <h1>Shop</h1>
            <p>Handmade products in solid material.</p>
          </>
        )}
            
            
                <MenuPopper/>
          
     </div>
    )}

    export default Smallshop;