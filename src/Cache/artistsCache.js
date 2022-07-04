import React, {useState} from "react"

const ARTISTS_CACHE="ARTISTS_CACHE"
const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14

const currentTime=()=>{
    return Date.now()
}

const getArtistsCache=()=>{
    

    let artistCache={
        data:{},
        nextCleanup:new Date().getTime()+TWO_WEEKS
    }  

    try {
        const data=localStorage.getItem(ARTISTS_CACHE);

        if(data){
            artistCache=JSON.parse(data);
        }
    }
    catch(e){
        console.error(e.message);
    }

    return artistCache;
}

const setArtistsToCache=(userId,value)=>{

    const artistCache=getArtistsCache();
    const data=artistCache.data;


    const item={
        id:userId,
        expiry:new Date().getTime()+TWO_WEEKS,
        artist:value
    }

    data[userId]=item

    try{
        localStorage.setItem(ARTISTS_CACHE,JSON.stringify(artistCache))
    }
    catch(e){
        cleanUpStorage(data)
    }

}


const cleanUpStorage=(data)=>{

    let isDeleted
    let oldest
    let oldestKey


    //if 14 days have been passed, it removes the cache
    for (const key in data) {
        console.log("key is",key)
        const expiry = data[key].expiry
        if (expiry && expiry <=currentTime()) {
          delete data[key]
          isDeleted = true
        }
    
        //finding the oldest cache in case none of them are expired
        if (!oldest || oldest > expiry) {
          oldest = expiry
          oldestKey=key
        }
    }

    //remove the oldest cache if there is no more space in local storage (5 MB)
    if(!isDeleted && oldestKey){
        delete data[oldestKey]
    }

    localStorage.setItem(
        ARTISTS_CACHE,
        JSON.stringify({
          data: data,
          nextCleanup:currentTime() + TWO_WEEKS,
        })
    )

}

export {getArtistsCache, setArtistsToCache};