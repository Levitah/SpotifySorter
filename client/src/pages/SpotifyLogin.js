import * as React from "react";
import { useSearchParams } from "react-router-dom";

const SpotifyLogin = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
          <span>Login successful</span>
        </div>
      );

    //return returnedCode;
};
  
export default SpotifyLogin;