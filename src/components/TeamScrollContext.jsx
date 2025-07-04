import { createContext, useContext, useRef } from "react"

const TeamScrollContext = createContext()

export const TeamScrollProvider = ({ children }) => {
    const teamRef = useRef(null)

    const scrollToTeam = () => {
        if (teamRef.current) {
            teamRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <TeamScrollContext.Provider value={{ teamRef, scrollToTeam }}>
            {children}
        </TeamScrollContext.Provider>
    )
}

export const useTeamScroll = () => useContext(TeamScrollContext)
