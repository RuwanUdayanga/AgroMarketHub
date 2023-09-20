import "./styles/Home.css";
import Carousel from "./components/Carousel";
import Vegetable from "./assets/Vegetable/vege-img.jpg";
import Fruit from "./assets/fruit-img.png";

function Home() {
  return (
    <div id="home" className="container-fluid bg-white">
      <div className="carousel-container styles={height:300px}">
        <Carousel />
      </div>
      <div id="vegetable" className="container-fluid bg-white">
        <h2>Shop by Catagory</h2>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div
              className="card text-bg-dark"
              style={{
                borderTopLeftRadius: "30%",
              }}
            >
              <img
                src={Vegetable}
                className="card-img"
                style={{
                  borderTopLeftRadius: "30%",
                }}
                alt="vege"
              />
              <div className="card-img-overlay">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <small></small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              className="card text-bg-dark bg-dark"
              style={{
                borderBottomLeftRadius: "30%",
              }}
            >
              <img
                src={Fruit}
                className="card-img"
                style={{
                  borderTopLeftRadius: "30%",
                }}
                alt="vege"
              />
              <div className="card-img-overlay">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <small></small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
