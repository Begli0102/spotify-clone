import React from "react";
import styled from "styled-components";
import { accessUrl } from "../spotify";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  img {
    width: 100%;
  }

  a {
    padding: 15px;
    border-radius: 99px;
    color: #fff;
    background-color: #1db954;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    border: none;
    text-decoration: none;
    margin-bottom: 200px;
  }
`;

const Login = () => {
  return (
    <Container>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>Login with spotify</a>
    </Container>
  );
};

export default Login;

// import styled, { css } from 'styled-components'

// const AnimationContainer = styled.div`;
//   transform: translate(0%);
//   transition: 0.3s ease-out;

//   ${props => props.animated && css`
//     &:hover {
//       position: fixed;
//       transform: translate(0%, -30%);
//       transition: 0.3s ease-out;
//     }
//   `}
// `

// export default AnimationContainer
// And then you may use it like this:

// import AnimationContainer from './path/to/AnimationContainer

// // some component here…
//   render() {
//     return (
//       <!-- some JSX element… -->
//         <AnimationContainer animated>
//           With animation
//         </AnimationContainer>
//         <AnimationContainer>
//           Without animation
//         </AnimationContainer>
//       <!-- end of some JSX element… -->
//     )
//   }
