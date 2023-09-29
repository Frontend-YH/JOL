import "./ShopHeader.css"
import MenuPopper from "./Popover.tsx";
import { useContext } from "react";
import { CartContext } from "../CartContext.tsx"


function ShopHeader({admin=false}) {

    const { lang } = useContext(CartContext);
    
    let title = "Butik";
    let engTitle = "Shop";

    let ptext = "Handgjorda produkter i gediget material.";
    let engPtext = "Handmade products in solid material.";

    if (admin===true) { 

      title = "Redigera Produkter";
      engTitle = "Edit Products";
      ptext = "Klicka på den produkt du önskar redigera eller ta bort.";
      engPtext = "Click on the product you wish to edit or delete."
      
    }

    return (
        <div className="SSDiv">

{lang==="swe" ? (<>
            <h1>{title}</h1>
            <p>{ptext}</p>
            </>
        ) : (
          <>
            <h1>{engTitle}</h1>
            <p>{engPtext}</p>
          </>
        )}
            
            
                <MenuPopper/>
          
     </div>
    )}

    export default ShopHeader;