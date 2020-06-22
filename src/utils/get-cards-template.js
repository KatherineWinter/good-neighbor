//import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { Card } from '../components/card'
import { merits } from '../merit'

export function getCardsTemplate(
  activeId,
  userData,
  handleCardClick,
  handleSaveCompletion
) {
  const cards = merits.map((merit) => {
    if (activeId && activeId !== merit.id) {
      return null
    }

    return (
      <Card
        key={merit.id}
        merit={merit}
        userData={userData}
        isActive={!!activeId}
        handleCardClick={() => handleCardClick(merit)}
        handleSaveCompletion={handleSaveCompletion}
      />
    )
  })

  return <div className="cards">{cards}</div>
}
