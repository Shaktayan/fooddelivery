
import { Fragment } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box,styled } from "@mui/material";


const Component = styled('Box')`
    padding :10px;
`;

const Home = () =>{
    return(
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home