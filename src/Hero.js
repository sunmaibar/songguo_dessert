import React from 'react'
import styled from 'styled-components'
import hero from './image/hero_image.jpeg'
const Hero = () => {
  return (
    <Wrapper>
      <div className='hero-center'>
        <img src={hero} alt='hero-image' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1280px;
  position: relative;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  .hero-center {
    max-width: 720px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`

export default Hero
