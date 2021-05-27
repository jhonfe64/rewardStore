import styled from 'styled-components';


const TopJumbo = styled.div`

    height: 90vh;
    overflow: hidden;

    & div div.headPhones {
        height: 100vh;
        overflow: hidden;
    }

    & div div.headPhones img {
        object-fit: cover;
    }

    & div.description {

        h2, h5 {
            color: #ffffff;
            font-weight: 100;
        }

        h2 {
            font-size: 5rem;
        }

        h5 {
            font-size: 2.5rem;
        }
    }

    & div.cablePhone {
        height: 45%;
        overflow: hidden;
    }

    & div.cablePhone img {
        object-fit: cover;
    }

    & div.name {
        background-image: linear-gradient(to right, #F54B64, #F78361);
        height: 55%;
    }

    @media only screen and  (max-width: 655px){
        height: auto;
    }    

    @media only screen and  (max-width: 655px){
        & div.name h2  {
            font-size: 3.2rem;
            text-align: center;
        }
        & div.name h5  {
            font-size: 2rem;
            text-align: center;
        }
    }

    @media only screen and  (max-width: 560px){
        & div.name h2  {
            font-size: 1.7rem;
        }
        & div.name h5  {
            font-size: .8rem;
        }
    }
`

export default TopJumbo;