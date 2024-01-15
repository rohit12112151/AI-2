import React from 'react'

function Tokenreducer(user,action) {

    switch(action.type){
        case "SET_TOKEN":return action.payload;
        case "UNSET_TOKEN":return {};
        default : return user;
    }
  
}

export default Tokenreducer
