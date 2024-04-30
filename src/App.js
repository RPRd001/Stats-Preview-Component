import './App.css';
import desktopImage from './images/image-header-desktop.jpg'

function App() {
  return (
    <div className="App">
      <div id="stats-preview-component">
            
            <div class="info-container flex-column">
                <h1>
                    Get <span class="highlighted-text">insights</span> that help your business grow.
                </h1>

                <p>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer
                    experience, and overall efficiency.
                </p>


                <ul class="item-container flex-row">
                    <li class="flex-column">
                        <span class="number">10k+</span> <span class="item-text">COMPANIES</span>
                    </li>
                    <li class="flex-column">
                        <span class="number">314</span> <span class="item-text">TEMPLATES</span>
                    </li>
                    <li class="flex-column">
                        <span class="number">12M+</span> <span class="item-text">QUERIES</span>
                    </li>
                </ul>
            </div>

            <div class="image-container">
                <img src={desktopImage} alt="a group of people working in a desk"/>
            </div>
        </div>
    </div>
  );
}

export default App;
