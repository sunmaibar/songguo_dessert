import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <div className='center'>
        <p>copyright &copy; 松菓甜點工作室 {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: var(--clr-gold);
  display: flex;
  align-items: center;
  .center {
    text-align: center;
    width: 80vw;
    margin: 0 auto;
    margin-top: 1rem;
  }
  p {
    font-size: 1rem;
    color: var(--clr-white);
  }
`

export default Footer
