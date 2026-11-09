import { PLACES_INFO  } from '../../constants'
import { type PlaceCategory } from '../../types.d'
import { Link } from 'react-router'
import './Places.css'
import {useEffect, useState} from 'react'

const CATEGORY_FILTERS: PlaceCategory[] = ['Location', 'Cerro', 'Laguna']

function Places() {
  const [categories, setCategories] = useState([...CATEGORY_FILTERS])
  const [places, setPlaces] = useState([...PLACES_INFO])

  useEffect(()=> {
    console.log('a')
    setPlaces(PLACES_INFO.filter(place => categories.includes(place.category)))
    console.log(places)
  }, [categories])

  console.log(categories)

  return (
      <>
        <h1>Places to visiit in Tepicyork</h1>

        <div className='container'>
          <div className='categories'>
            {CATEGORY_FILTERS.map((category_filter, i)=> (
              <div key={i}>
                {category_filter}
                <input
                  type='checkbox' 
                  checked={categories.includes(category_filter)}
                  onChange={e => {
                    if (e.target.checked) {
                      setCategories(categories => [...categories, category_filter])
                    } else {
                      setCategories(categories => categories.filter(x => x !== category_filter))
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <div className='places'>
            {places.map((place, i) => {
              return (
                <Link
                  to={`/place/${place.name}`}
                  className='place'
                  key={i}  
                >
                  {place.name}
                </Link>
              )
            })}
          </div>
        </div>
      </>
    )
}

export default Places
