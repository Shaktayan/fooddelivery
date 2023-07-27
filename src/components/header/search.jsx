
import { InputBase,Box,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled('Box')`
    background : #fff;
    width : 38%;
    border-radius:2px;
    margin-left :10px;
    display :flex;
`;
const InputSearchBase = styled(InputBase)`
        padding-length: 20px;
        width:80%;
        margin-left:50px;
        font-size :unset;

`;
const SearchIconwrapper = styled('Box')`
        color :orange;
        margin-left :70px;
        margin-top:5px;
        display :flex;

`;

const Search = () => {
    return (
        <SearchContainer>
        <InputSearchBase
            placeholder = 'Search for food'
        />
        <SearchIconwrapper>
            <SearchIcon />
        </SearchIconwrapper>
        </SearchContainer>
        )
}
export default Search;