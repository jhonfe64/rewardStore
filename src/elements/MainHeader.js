import styled from 'styled-components';


const MainHeader= styled.div`

&.fixed {
   position: fixed;
   left: 0;
   right: 0;
   background-color: #ffffff;
   z-index: 10000;
   box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}


 & .logo img {
   width: 28px;
 }

 & ul li a {
    color: #000000;
    font-weight: 600;
 }

 & ul li span {
    font-weight: 900;
 }

 & .coins {
    background-color: #ecf0f1;
    border-radius: 10px;
    padding: 5px 10px;
    text-align: left;
 }

 & .coins span {
   display: inline-block;
   padding-left: 20px;
 }

 & .coins svg {
   color: #f39c12
 }
`

export default MainHeader;