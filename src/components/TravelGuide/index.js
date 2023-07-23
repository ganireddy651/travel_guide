import './index.css'

const TravelGuide = props => {
  const {eachItem} = props
  const {name, imageUrl, description} = eachItem

  return (
    <li>
      <div className="travel-guide-card">
        <img className="travel-image" src={imageUrl} alt={name} />
        <div className="description-container">
          <h1 className="travel-guide-card-heading">{name}</h1>
          <p className="travel-guide-card-description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default TravelGuide
