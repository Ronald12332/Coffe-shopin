import { useEffect, useState } from 'react'

export function useCoffeMenu () {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
      )
      const data = await response.json()
      setCoffees(data)
    }

    fetchData()
  }, [])

  return coffees
}
