import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import './teams.css'
import { GetUser } from '../context/LoggedInUser';

const UserLeagues = (props) => {
    const { handleLeague } = props
    const  currentUser  = GetUser() 
    let leagues = [...currentUser.leagues]
    const navigate = useNavigate()
    const [currentLeague, setCurrentLeague] = useState({})


    useEffect(() => {
        let currLeague = {}
        if (currentUser && currentUser.leagues) {
            for (let league in currentUser.leagues) {
                currLeague[league._id] = false
            }
        }
        setCurrentLeague({ ...currLeague })
    }, [currentUser])

    const handleClick = (e, leagueID) => {
        let newCurrentLeague = Object.keys(currentLeague).reduce((accumulator, key) => {
            return { ...accumulator, [key]: false };
        }, {});
        newCurrentLeague[e.target.id] = true
        setCurrentLeague({ ...newCurrentLeague })
        handleLeague(leagueID)

    }


    return leagues && leagues.length !== 0 ? (
        <div className='flex flex-col w-full lg:w-1/2 mx-auto rounded shadow-lg shadow-[#98b9ff] '>
            <div className='text-center text-2xl bg-[#181042] font-bold text-white rounded-t-lg p-2'>Current Leagues</div>
            {leagues.map(league =>
                <>
                    <p className='flex align-center justify-start items-center w-full'>
                        <div className={` font-bold  hover:bg-gradient-to-r hover:p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-xl basis-3/4 ${currentLeague[league._id] ? "rounded-xl w-1/4 mx-auto bg-gradient-to-r p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]" : ""}`}>
                            <button className={`text-white bg-[#120C36]  h-full  w-full flex flex-col justify-between h-full bg-[#120C36] text-white rounded-lg p-4 `} onClick={(e) => handleClick(e, league._id)} id={league._id}>{league.name}</button>
                        </div>
                        <button onClick={() => navigate(`/leagues/${league._id}`)} className="p-4 h-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA] bg-clip-text text-transparent font-bold hover:scale-105 basis-1/4 hover:bg-indigo-400">View League</button>
                    </p>
                </>
            )}

        </div>
    ) : (
        <p className='flex flex-col align-center justify-start items-center w-full'>
            <div className={` font-bold  hover:bg-gradient-to-r hover:p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-xl basis-3/4 w-full lg:w-1/2 flex items-center justify-center`}>
                <div className={`text-white bg-[#120C36] text-center  h-full  w-full flex flex-col justify-between h-full bg-[#120C36] text-white rounded-lg p-4 cursor-pointer `} onClick={() => navigate(`/leagues/create`)} >Create A League</div>
            </div>
            <div className={` font-bold  hover:bg-gradient-to-r hover:p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-xl basis-3/4 w-full lg:w-1/2 text-center`}>


                <div className={`text-white bg-[#120C36] text-center  h-full  w-full flex flex-col justify-between h-full bg-[#120C36] text-white rounded-lg p-4 cursor-pointer `} onClick={() => navigate(`/leagues`)} >Join A League</div>
            </div>


        </p>

    )
}

export default UserLeagues
