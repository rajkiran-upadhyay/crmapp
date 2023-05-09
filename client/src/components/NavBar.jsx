import { AppBar, Toolbar, styled } from '@mui/material';//AppBar is the component of mui: component reusability
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)` 
background:linear-gradient(to left,grey,black,brown)`;
const Tb = styled(Toolbar)` 
margin:0 auto;
a{
  text-decoration:none;
}
&>a:link{
  color:red;
 }
&>a:visited{
  color:green;
 }
&>a:hover{
  font-weight:bold;
  color:violet;
  box-shadow:0 0 6px violet;
}

&>a:active{
  color:blue;
  }
`;

const Tabs = styled(NavLink)`
font-size:10px;
margin-right:15px;
border:2px solid white;
border-radius: 4px;
padding:5px;
text-decoration:none;
box-shadow: 0 0 4px grey
`
const NavBar = () => {
  return (
    <Header position='static'>
      <Tb>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/all'>Edit/Delete Users</Tabs>
        <Tabs to='/add'>Add Users</Tabs>
      </Tb>
    </Header>
  )
}
export default NavBar