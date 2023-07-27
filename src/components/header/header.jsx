

import {AppBar,Toolbar,Box,styled, Typography} from '@mui/material';
import Search from './search';
import CustomButtons from './CustomButtons';
const StyledHeader = styled(AppBar)`
    background: orange;
    height : 55px;
`;
const Component = styled('Box')`
   margin-left:5%;
`;
const CustomButtonWrapper=styled('Box')`
    margin: 0 5% 0 5%;
`


const Header = () =>{
    const logoURL ='https://tse4.mm.bing.net/th?id=OIP.FNyH0vF0Rh-MRz4qdn3PcQAAAA&pid=Api&P=0&h=180';
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight:55}}>
                <Component>
                <img src={logoURL} alt="logo" style={{width :100 }} />
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
                </Toolbar>
        </StyledHeader>
    )
}
export default Header;
