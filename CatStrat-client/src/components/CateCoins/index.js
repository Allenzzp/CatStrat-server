import React from 'react'
import "./CateCoins.scss"
import StripeCheckout from 'react-stripe-checkout'
import Axios from "axios"
import { useState, useEffect } from 'react'

const CateCoins = (props) => {
  const userID = localStorage.getItem("userID");
  const { setCoins } = props;

  const handleToken = (token) => {
    console.log("token", token)
  }

  //strip checkout card num: 4242 4242 4242 4242
  const buyCateCoins = (amount) => {
    Axios.post(`/purchase/catecoins/${amount}`, { userID })
      .then(res => {
        console.log("Purchase Successfully!");
        setCoins(res.data.coins);
      })
      .catch(err => err.message);
  }

  return (
    <div className="coin-container">
      <div className="coin-container-inner">

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <div className="coin-txt">10 Catcoin</div>
            <img className="img-resize" src="https://thumbs.dreamstime.com/b/coins-vector-icon-illustration-stack-coins-coin-front-digital-currency-flat-style-gold-coins-isolated-coins-116254670.jpg" />
            
            
            <StripeCheckout amount="199" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins(10) } } email="111@qq.com">
              <button className="coin-btn" >$1.99</button>
            </StripeCheckout>
          </div>
        </div>

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <div className="coin-txt">50 Catcoin</div>  
            <img className="img-resize" src="https://image.freepik.com/free-vector/wallet-full-bitcoins-icon-flat-cartoon-illustration_133260-374.jpg" />
            <StripeCheckout amount="499" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins(50)} } email="111@qq.com"><button className="coin-btn">$4.99</button></StripeCheckout>
          </div>
        </div>

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <div className="coin-txt">100 Catcoin</div>
            <img className="img-resize" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8kRlg9NUghbMbYpH6QJj5QwCzBN7W3kjIyviyMonvjLlJK-DXG9drGMeQyT6eb3cwPw&usqp=CAU" />
            <StripeCheckout amount="999" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins(100)} } email="111@qq.com"><button className="coin-btn">$9.99</button></StripeCheckout>
          </div>
        </div>

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <img className="img-resize" src="https://img.freepik.com/free-vector/treasure-chest-open-ancient-large-trunk-full-shiny-gems-jewelry-medieval-mystery-pirate-treasures-topaz-sapphire-gemstones-wooden-box-winning-prize-symbol-cartoon-vector-isolated-icon_176411-3244.jpg?size=626&ext=jpg" />
            <div className="coin-txt">250 Catcoin</div>
            <StripeCheckout amount="1999" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins(250)} } email="111@qq.com"><button className="coin-btn" >$19.99</button></StripeCheckout>
          </div>
        </div>

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <img className="img-resize" src="https://thumbs.dreamstime.com/b/chest-glowing-treasure-25354925.jpg" />
            <div className="coin-txt">1000 Catcoin</div>
            <StripeCheckout amount="4999" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins(1000)} } email="111@qq.com"><button className="coin-btn">$49.99</button></StripeCheckout>
          </div>
        </div>

        <div className="coin-boxes">
          <div className="coin-boxes-inner">
            <img className="img-resize" src="http://content.puzzlepirates.com/images/spyglass/2011july/plum_box_blog.png" />
            <div className="coin-txt">Mystery Box</div>
            <StripeCheckout amount="999" description="Receive 1-200 Coins" stripeKey="pk_test_51KOVomLl6Bd8nSfz4hmUZcP8DvOt1OS84lBttCRAqUIJ4oSmwvM8K8AE1OJBFrmDhh4KGZHiymJdMwrWhhuEu3MY00oH5MTsmH" token={handleToken} closed={ () => {buyCateCoins("random")} } email="111@qq.com"><button className="coin-btn" >$9.99</button></StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CateCoins