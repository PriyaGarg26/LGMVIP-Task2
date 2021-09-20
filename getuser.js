import React from 'react';
import './getuser.css';
import RingLoader from "react-spinners/RingLoader";
import {css} from '@emotion/react';
import 'tachyons';

const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

const Getuser=({loading,Getuser})=>{
  return loading?(
    <div>
     <RingLoader color={"#9600B6"} loading={loading} css={override} size={150} /> 
     <h2 className="Load">Loading Users</h2>
    </div>
  ):
  (
    <div>
      {Getuser.map(curelem=>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 bgm" key={curelem.id}>{
        console.log(curelem)
      }
      <img src={curelem.avatar} alt={curelem.avatar} className="sized"></img>
      <h1 className="name">{curelem.first_name}{curelem.last_name}</h1>
      <p1><b>{curelem.email}</b></p1>
      </div>
      )
    }

    
  
</div>
  )
}


export default Getuser;
