import React from 'react'
import "./profile.scss"
import coin from "../../images/imgC.png"
import Upvotes from '@mui/icons-material/ThumbUp';
import Downvotes from '@mui/icons-material/ThumbDown';
import Trophy from '@mui/icons-material/EmojiEvents';
import {useState, useEffect} from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {useNavigate, useParams} from 'react-router-dom'
import Axios from "axios";
import PieChart from './PieChart2';
import classNames from 'classnames'
import ProfileStrategy from './ProfileStrategy';

import 'devextreme/dist/css/dx.material.blue.dark.compact.css';
import { ProgressBar } from 'devextreme-react/progress-bar';

const Profile = ({setCoins, coins, tab, setTab}) => {
  const navigate = useNavigate();

  // const [loginID, setLoginID] = useState("")
  const [getData, setGetData] = useState("");
  const [stratData, setStratData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [likeData, setLikeData] = useState([])
  const [dislikeData, setDislikeData] = useState([])
  // const [purchaseData, setPurchaseData] = useState([])

  const [editProfile, setEditProfile] = useState(false);
  const [follow, setFollow] = useState(false);
  const [showPurchase, setShowPurchase] = useState(true);
  const [showStrat, setShowStrat] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showFollow, setShowFollow] = useState(false);
  const [removeFollow, setRemoveFollow] = useState(false);

  const [bought, setBought] = useState(false);
  const [addLike, setAddLike] = useState(false);
  const userID = localStorage.getItem("userID");
  const params = useParams();
  const id = params.id;

  const graphClass = classNames("graph-chart", {
    "graph-chart--bought": bought,
  })

  useEffect(() => {
   
    Promise.all([
      Axios.get(`/profile/${id}}`, {params: {id, userID}}),
      Axios.get(`/dashboard`, { params: { user_id: id } }),
      Axios.get("/strategies", {params: {id}}),
      Axios.get("/sellers", {params: {id, userID}}),
      Axios.get("/likers", {params: {id, userID}}),
      Axios.get("/dislikers", {params: {id, userID}}),
      Axios.get("/stratsellers", {params: {id, userID}}),
      setTab('Profile')
    ]).then((all) => {
      
      setGetData(all[0].data[0]);
      console.log("all0", all[0].data)
      setGraphData(all[1].data)
      console.log("all1", all[1].data)
      setStratData(all[2].data)
      console.log("all2", all[2].data)
      console.log("all3", all[3].data)
      setLikeData(all[4].data)
      console.log("all4", all[4].data)
      setDislikeData(all[5].data)
      console.log("all5", all[5].data)
      console.log("all6", all[6].data)

      if (userID !== id) {
        setShowFollow(true)
      }

      if (userID == id) {
        setShowPurchase(true)
        setBought(true)
        setShowStrat(true)
        setEditProfile(true)
        setShowCompare(false)
        setShowFollow(false)
      }
      
      if (all[3].data.length > 0) {
        setBought(true);
        setShowCompare(true);
      }

      if (all[6].data.length > 0) {
        setShowStrat(true);
      }
      

      // console.log("plz work", all[0].data[0].fid)
      if (all[0].data[0].fid) {
        setRemoveFollow(true)

        if (parseInt(userID) !== parseInt(id) && removeFollow === false) {
          console.log("this", removeFollow, userID, id)
          setFollow(true)
        } else {
          console.log("not this", removeFollow, userID, id)
          setFollow(false)
        }  
      } else {
        setRemoveFollow(false)

        if (parseInt(userID) !== parseInt(id) && removeFollow === false) {
          console.log("this", removeFollow, userID, id)
          setFollow(true)
        } else {
          console.log("not this", removeFollow, userID, id)
          setFollow(false)
        } 
      }
    }).catch(err => {
      console.log(err)
      // navigate("/newprofile")
    })

  }, [id, addLike, bought, removeFollow])

  const followUser = () => {
    console.log("clicked")
    const userID = localStorage.getItem("userID")
  
    Axios.post("/following", {userID, id})
      .then(res => {
        console.log("followed success!", res.data)
        if (res.data.added === true) {
          setRemoveFollow(true)
        }
      })
      .catch(err => console.log(err));
  }
  
  const unfollowUser = () => {
    console.log("clicked")
    const userID = localStorage.getItem("userID")
  
    Axios.post("/unfollow", {userID, id})
      .then(res => {
        console.log("unfollowed success!")
        if (res.data.added === false) {
          setRemoveFollow(false)
        }
      })
      .catch(err => console.log(err));
  }
  
  const like = () => {
    console.log("clicked")
    if (userID == id) {
      return;
    }

    if (likeData.length > 0) {
      console.log("check", likeData[0].liker_id)
      return;
    }

    Promise.all([
      Axios.post("/like", {id, userID}),
      Axios.post("/like/user", {id, userID}),
      Axios.post("/buylike", {id, userID})
    ]).then(res => {
        // alert("You liked this profile and sent 1 CatCoin!")
        setAddLike(!addLike)
        setCoins(coins-1)
      })
      .catch(err => console.log(err));
  }
  
  const dislike = () => {
    console.log("clicked", dislikeData)
    if (userID == id) {
      return;
    }
    
    if (dislikeData.length > 0) {
      console.log("we are here")
      return;
    }
  
    Promise.all([
      Axios.post("/dislike", {id}),
      Axios.post("/buydislike", {id, userID}),
    ]).then(res => {
        console.log("success! dislike")
        setAddLike(!addLike)
      })
      .catch(err => console.log(err));
  }
  
  const upvote = (item_id) => {
    console.log("clicked")
    if (userID == id) {
      return;
    }
  
    Promise.all([
      Axios.post(`/strategy/${item_id}`, {userID, id}),
      Axios.post("/upvotecoins", {userID, id})
    ]).then(res => {
      setCoins(coins - 1)
      setAddLike(!addLike)
    })
      .catch(err => console.log(err))
  }

  const downvote = (item_id) => {
    console.log("clicked")
    if (userID == id) {
      return;
    }

    Promise.all([
      Axios.post(`/strategy/delete/${item_id}`),
    ]).then(res => {
        setAddLike(!addLike)
      })
      .catch(err => console.log(err))
  }

  const purchase = () => {
    const userID = localStorage.getItem("userID");

    Promise.all([
      Axios.post("/purchase/graph", {id, userID}),
      Axios.post("/buygraph", {id, userID})
    ]).then(res => {
        setShowCompare(true)
        setBought(true);
        setCoins(coins-5);
      })
      .catch(err => console.log(err))
  }

  const purchaseStrat = () => {
    const userID = localStorage.getItem("userID");

    Promise.all([
      Axios.post("/purchase/strategies", {id, userID}),
      Axios.post("/buystrat", {id, userID}),
    ]).then(res => {
      // alert("Strategies are now unlocked!")
      setAddLike(!addLike)
      setShowStrat(true);
      setCoins(coins-15)
    })
    .catch(err => console.log(err));
  }

  const navigateCompare = (id) => {
    setTab('Comparison')
    navigate(`/comparison/${id}`)
  }

  const navigateCoins = () => {
    setTab('')
    navigate(`/catecoins/${userID}`)
  }

  const navigateTransaction = () => {
    setTab('Transaction')
    navigate(`/transaction`)
  }

  return (
    <div className="profile-container">
      <div className="profile-container-side">
        <img src={getData.avatar_url} className="avatar" alt="avatar"/>
        <div className="profile-social">
          <p className="">Investment Bracket: {getData.money_bracket}</p>
          <p className="icons-i"><FaFacebook className="fb1"/>facebook/Catstreetbets</p>
          <p className="icons-i"><FaInstagram className="fb1"/>instagram/Catstreetbets</p>
          <p className="icons-i"><FaTwitter className="fb1"/>Twitter/Catstreetbets</p>
          {/* <p className="icons-i"><FaLinkedin />LinkedIn/Catstreetbets</p> */}
          <p className="icons-i" onClick={navigateCoins}><img className="catecoin" src={coin} alt="catecoin" onClick={navigateCoins}/>{`X ${getData.coins}`}</p>
        </div>
      </div>
      <div className="profile-container-main">
        <div className="profile-about">
          <div className="user-profile">
            <div className="profile-separator">
              <div className="follow-btn">
                <div className="profile-username">{getData.username}<VerifiedIcon/></div>
                {showCompare ? <Button id="compare-id" size="small" variant="contained" onClick={() => {navigateCompare(id)}}>Compare</Button> : <></>}
                {showFollow ? <>{follow ? <Button id="follow-btn-id" size="small" variant="contained" onClick={followUser}>Follow</Button> : <Button size="small" id="follow-btn-id" variant="contained" onClick={unfollowUser} >Unfollow</Button>}</> : <></>}
                
              </div>
              <div>
                <div className="last-online">Last Online: 2 hours ago</div>
              </div>
            </div>
            <div className="follow-separator">
              <div className="f-number">
                <div className="follow-number">{getData.followers}</div>
                <div className="profile-followers">followers</div>
              </div>
              <div className="f-text">
                <div className="follow-number">{getData.following}</div>
                <div className="profile-followings">followings</div>
              </div>
            </div>
          </div>
          <div className="stock-profile">
            {editProfile && <Button id="edit-btn" size="small" variant="contained" onClick={navigateTransaction}>History</Button>}
            <div className="progressbar" >
            <div className="profit-goal"></div>
              <h4 className="profit-goal-text">{`Profit Goal: $ ${getData.profit_goal}`}</h4>
              <ProgressBar
                min={0}
                max={100}
                value={(parseInt(getData.profit) / getData.profit_goal) * 100}
                width={300}
                height={0}
              />
            <div className="votes">
              <div className="up" onClick={like}>
                <Upvotes id="upvote-a" />
                {`${getData.likes}`}
              </div>
              <div className="down" onClick={dislike}>
                <Downvotes id="downvote-b" />
                {getData.dislikes}
              </div>
            </div>
            </div>
          </div>
        </div> 
        <div className="profile-graph">
          <div className="graph1">
            <div className="purchase-g1-graph">Strategy Chart</div>
            <div className={graphClass}><PieChart id="graph-chart" data={graphData}/></div>
           {bought ? <></> : <Button className="graph1-btn" variant="contained" size="small" onClick={purchase}>Purchase</Button>}
          </div>
          <div className="graph2">
            <div className="table-container">
              <tr className="table-columns">
                {/* <th className="one-a">Strategy Name</th> */}
                <th className="one-b">{getData.username}'s  Custom  Strategies</th>
              </tr>
              {showStrat ? 
                <ProfileStrategy 
                  stratData={stratData} 
                  upvote={upvote} 
                  downvote={downvote}
                />
              :
                <>
                  <div className="g2-container">
                    <Button id="g2-btn" variant="contained" size="small" onClick={purchaseStrat}>Purchase</Button>
                    </div>
                </>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile