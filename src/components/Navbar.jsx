import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    padding: 5px;
    margin-left: 25px;
    border: 0.5px solid lightGray;
    border-radius: 5px;
    display: flex;
    align-items: center;
`
const SearchBar = styled.input`
    border: none;
    outline: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
`

const Navbar = () => {

    let linkStyle = {
        textDecoration: "none",
        color: "black"
    };

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <SearchBar />
                    <SearchIcon style={{color: 'gray', fontSize: '16px'}} />
                </SearchContainer>
            </Left>
            <Center><NavLink to="/" style={linkStyle}><Logo>HAROON.</Logo></NavLink></Center>
            <Right>
                <MenuItem><NavLink to="/register" style={linkStyle}>REGISTER</NavLink></MenuItem>
                <MenuItem><NavLink to="/login" style={linkStyle}>SIGN IN</NavLink></MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge> 
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar