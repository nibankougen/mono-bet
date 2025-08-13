import { useCallback, useEffect, useState } from "react"
import { useActionCable } from "./api/useActionCable"

function App() {
  const { initGame, leaveGame, startGame, bet } = useActionCable()

  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")

  const handleBet = useCallback(() => {
    if (userId) {
      bet(userId)
    } else {
      console.warn("User is not initialized.")
    }
  }, [bet, userId])

  useEffect(() => {
    initGame("1")

    return () => {
      leaveGame()
    }
  }, [initGame, leaveGame])

  const handleUserNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }, [])

  const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (userName) {
      // Handle joining the game with roomKey and userName
      const response = await fetch(`http://localhost:3000/rooms/1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName, icon_id: "1" }),
      })
      const body = await response.json() as { id: string } | null
      if (body === null) {
        console.error("Failed to join the game")
        return
      }
      console.log(body)
      setUserId(body.id)
    }
  }, [userName])

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
          className="border p-2 rounded ml-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Join Game
        </button>
      </form>
      <button
        onClick={startGame}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Start Game
      </button>
      <button
        onClick={handleBet}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Bet
      </button>
    </>
  )
}

export default App
