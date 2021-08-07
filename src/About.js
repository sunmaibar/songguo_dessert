import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const About = () => {
  return (
    <Wrapper>
      <h2>關於松菓甜點</h2>
      <div className='underline'></div>
      <p className='about'>
        我們是位於象山腳下的甜點工作室，主人是二寶的媽，也是飯店的甜點師，堅持採用新鮮健康的原料，讓甜點增添點幸福的味道，有興趣的朋友們，歡迎加入我們粉絲團私訊給小編。
      </p>
      <div className='socal'>
        <a href='https://www.facebook.com/groups/484611052534791'>
          <FaFacebook />
        </a>
        <a href='https://www.instagram.com/songguo_dessert'>
          <FaInstagram />
        </a>
      </div>
      <div className='detail'>
        <h4>訂購須知:</h4>
        <p className='warning'>💡訂購資料：日期/姓名/聯絡電話/面交時間</p>
        <p className='warning'>
          💡 面交地點：
          <ul>
            <li>1.象山捷運站（2號出口）</li>
            <li> 2.全家祥和店（110台北市信義區信義路五段150巷401弄31號）</li>
          </ul>
          <br />
        </p>
        <p className='warning'>
          💡客製蛋糕固定是在「全家祥和店（110台北市信義區信義路五段150巷401弄31號）」
        </p>
        <p className='warning'>
          💡面交時間10:00-21:00 <br />
          （當日現烤類面交時間為12:00後，例：肉桂捲、蛋塔...）
        </p>
        <p className='warning'>💡工作室響應環保，一律不附刀叉盤及蠟燭</p>
        <p className='warning'>💡一律不附提袋，建議帶環保袋前往面交</p>
        <p className='warning'>
          💡付款方式：付現/國泰匯款/Linepay/台灣pay/街口支付
          （不收定金，當天付款亦可）
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  p.about {
    line-height: 2rem;
    width: 60vw;
    margin: 2rem auto;
  }
  .socal {
    font-size: 2rem;

    a {
      color: var(--clr-grey-3);
      padding: 0 0.5rem;
    }
    a:hover {
      cursor: pointer;
      color: var(--clr-grey-5);
    }
  }
  .detail {
    display: block;
    width: 60vw;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
    background-color: var(--clr-grey-5);
    border-radius: 30px;
    ul {
      margin-left: 1rem;
    }
    h4 {
      color: var(--clr-grey-3);
    }
    .warning {
      text-align: left;
      margin-top: 0;
      color: var(--clr-white);
    }
  }
`
export default About
