"use client"

import { Fragment, useEffect, useRef } from "react";

const SearchPlace = () =>{
const input = useRef(null as any)

    useEffect(() => {
        const script = document.createElement("script");
    
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjsYSsrLTouzWRYkAzVCzqEVpXpc4cLHE&libraries=places`
        script.async = true;
        document.body.appendChild(script);
    
        script.addEventListener("load", () => {
            console.log("Selected place:", );
            console.log("Script loaded successfully!");
            const autocomplete = new (window as any).google.maps.places.Autocomplete(input.current);

          });
        
      }, []); // Empty 
    return(
        <Fragment>
            <input type="text"  ref={input}/>
            <button type="submit">click</button>
        </Fragment>
    )
       
}
export default SearchPlace;