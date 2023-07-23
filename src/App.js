import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuide from './components/TravelGuide'
import './App.css'

class App extends Component {
  state = {isLoading: false, fetchedData: []}

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    this.setState({isLoading: true})
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()

    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      name: eachPackage.name,
      imageUrl: eachPackage.image_url,
    }))

    this.setState({fetchedData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, fetchedData} = this.state
    return (
      <div className="app-container">
        <h1 className="travel-guide-heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader
              className="loader"
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <ul className="list-container">
            {fetchedData.map(eachItem => (
              <TravelGuide eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
