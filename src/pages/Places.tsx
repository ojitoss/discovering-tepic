import { PLACES_INFO  } from '../../constants'
import { type PlaceCategory } from '../../types.d'
import { Link } from 'react-router'
import './Places.css'
import {  useState } from 'react'

const CATEGORY_FILTERS: PlaceCategory[] = ['Location', 'Cerro', 'Laguna']

function Places() {
  const [categories, setCategories] = useState([...CATEGORY_FILTERS])

  const places = PLACES_INFO.filter(place => categories.includes(place.category))

  return (
      <>
        <h1>Places to visit in Tepicyork</h1>

        <div className='container'>
          <div className='categories'>
            {CATEGORY_FILTERS.map((category_filter, i)=> (
              <div key={i}>
                {category_filter}
                <input
                  type='checkbox' 
                  checked={categories.includes(category_filter)}
                  onChange={e => {
                    const newState = e.target.checked 
                      ? [...categories, category_filter]
                      : categories.filter(x => x !== category_filter)

                    setCategories(newState)
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
                  <img src={place.main_image} />
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
