import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './teams.css'

const WeekDisplay = (props) => {
    const { handlePicks, handleWeek, leagueID } = props
    const [games, setGames] = useState(null)
    const [winners, setWinners] = useState({})
    const [confirm, setConfirm] = useState([])
    const [points, setPoints] = useState([])
    const [usedPoints, setUsedPoints] = useState([])
    const [leagueName, setLeagueName] = useState("")
    const [ready, setReady] = useState(false)
    const [weeksRemaining, setWeeksRemaining] = useState({})
    const [weeksRemainingNumbers, setWeekRemainingNumbers] = useState([])
    const [currWeek, setCurrWeek] = useState(weeksRemainingNumbers[0])



    useEffect(() => {


        axios.get(`http://localhost:8000/api/weeks`, { withCredentials: true })
            .then(res => {
                let weeks = res.data
                let remainingCount = []
                let remaining = weeks.reduce((remaining, week) => {
                    remaining[week.weekNumber] = week;
                    remainingCount.push(week.weekNumber)
                    return remaining;
                }, {})
                setWeeksRemaining({ ...remaining })
                setWeekRemainingNumbers([...remainingCount.sort((a, b) => a - b)])
                setCurrWeek(remainingCount[0])
                let weekGames = remaining[remainingCount[0]].games
                let currWinners = weekGames.reduce((winners, game) => {
                    winners[game.id] = createGameObject(game);
                    return winners;
                }, {})
                setGames([...weekGames])
                setPoints(weekGames.map((game, i) => i + 1))
                setWinners({ ...currWinners })
                axios.get(`http://localhost:8000/api/leagues/${leagueID}`, { withCredentials: true })
                    .then(res => {
                        setLeagueName(res.data[0].name)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }, []);

    const toggleWinner = (e, gameID) => {
        winners[gameID].winner = e.target.innerHTML
        setWinners({ ...winners })
        handleReady()
    }

    const handlePoints = (e, gameID) => {
        winners[gameID].points = parseInt(e.target.value)
        let currentPointsUsed = Object.values(winners).map(game => game.points)
        setUsedPoints([...currentPointsUsed])
        handleReady()
    }

    const handleReady = () => {
        const currentConfirm = Object.values(winners);
        setConfirm([...currentConfirm]);
        setReady(currentConfirm.every(game => game.winner !== '' && game.points > 0));
    }

    const sendPicks = () => {
        handlePicks(confirm, currWeek)
        handleWeek(currWeek)
    }



    const handleWeekChange = (e) => {
        handleWeek(e.target.value)
        setCurrWeek(e.target.value)
        handleConfirmTemplate(e.target.value)

    }


    const handleConfirmTemplate = (weekNum) => {
        const weekGames = weeksRemaining[weekNum].games;
        const gameCount = weekGames.map((game, i) => i + 1);
        const updatedWinners = weekGames.reduce((winners, game) => {
            winners[game.id] = createGameObject(game);
            return winners;
        }, {})
        setPoints(gameCount)
        setWinners(updatedWinners)
        setGames(weekGames)

    }

    const createGameObject = (game) => ({
        winner: "",
        points: 0,
        gameID: game.id,
        earned: 0
    });


    return games ? (
        <div className='my-5 w-[80%] mx-auto'>
            <h1 className='text-center text-2xl mx-auto my-10 border-2 border-white bg-[#181042]  w-1/3 p-3 rounded shadow-xl text-white'> Week <select name="weekNumber" className='rounded bg-[#181042]' onChange={(e) => handleWeekChange(e)}>
                {weeksRemainingNumbers.map(weekNumber => <option value={weekNumber}>{weekNumber}</option>)}
            </select></h1>
            {ready &&
                <div className='flex justify-center my-5'>
                    <button className='bg-indigo-500 p-3 text-white hover:bg-indigo-300 hover:scale-105 font-bold w-1/4 mx-auto animate-pulse rounded-xl' onClick={() => sendPicks()}>Submit for {leagueName} </button>
                </div>
            }
            <div className='mx-auto w-full lg:w-1/2 text-center'>
                {games.map(game =>
                    <>
                        <p className='flex align-center justify-between items-center w-full wrap my-5'>
                            <span className={` basis-1/3  bg-white p-2  w-1/4 rounded-md font-bold hover:scale-105 text-sm hover:cursor-pointer ${winners[game.id].winner === game.home.name ? game.home.alias : ""}`} onClick={(e) => toggleWinner(e, game.id)} id="home" >
                                {game.home.name}
                            </span>
                            <span className='text-2xl text-[#67d9c0] font-bold'>vs</span>
                            <span className={` basis-1/3 bg-white p-2  w-1/4 rounded-md font-bold hover:scale-105 text-sm  hover:cursor-pointer ${winners[game.id].winner === game.away.name ? game.away.alias : ""}`} id="away" onClick={(e) => toggleWinner(e, game.id)}>
                                {game.away.name}
                            </span>
                            <select name={game.id} className="rounded bg-[#67d9c0] p-1 text-center font-bold" onChange={(e) => handlePoints(e, game.id)}>
                                <option value="" className='text-sm'>Select Points</option>
                                {points.map(point => !usedPoints.includes(point) ? <option value={point}>{point}</option> : <option value={point} hidden>{point}</option>)}
                            </select>
                        </p>
                    </>
                )}
            </div>
        </div>
    ) : <p className='animate-bounce text-center my-10 text-2xl font-semibold text-[#67d9c0]'><svg class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
    </svg>LOADING</p>
}
export default WeekDisplay
