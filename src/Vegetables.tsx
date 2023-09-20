import "./styles/Vegetables.css";
import Tomato from "./assets/Vegetable/Tomato.png";
import Carrot from "./assets/Vegetable/Carrot.png";
import Coconut from "./assets/Vegetable/Coconut.png";
import Potato from "./assets/Vegetable/Potato.png";
import Gourd from "./assets/Vegetable/Gourd.png";
function Home() {
  return (
    <div id="vegetable" className="container-fluid bg-dark bg-about">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3 category-list">
          <h5>Search by Category</h5>
          <div className="list-group">
            <a
              href="#Organic"
              className="list-group-item list-group-item-action"
            >
              Organic
            </a>

            <a
              href="#LowCountry"
              className="list-group-item list-group-item-action list-group-item"
            >
              Low country vegetables
            </a>
            <a
              href="#UpCountry"
              className="list-group-item list-group-item-action list-group-item"
            >
              Up country vegetables
            </a>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 about">
          <h1 className="heading-about pt-3 pb-3">Vegetables</h1>
          <div className="row">
            <div className="col-md-3 col-sm-12 about">
              <div className="card styles=width: 20rem;">
                <img src={Tomato} className="card-img-top" alt="Tomato" />
                <div className="card-body">
                  <div className="card-text">
                    <p className="veg-name">Tomato</p>
                    <p className="veg-price">price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 about">
              <div className="card styles={width: 20rem;}">
                <img src={Carrot} className="card-img-top" alt="Carrot" />
                <div className="card-body">
                  <div className="card-text">
                    <p className="veg-name">Carrot</p>
                    <p className="veg-price">price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 about">
              <div className="card styles=width: 20rem;">
                <img src={Coconut} className="card-img-top" alt="Coconut" />
                <div className="card-body">
                  <div className="card-text">
                    <p className="veg-name">Coconut</p>
                    <p className="veg-price">price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 about">
              <div className="card styles=width: 20rem;">
                <img src={Potato} className="card-img-top" alt="Potato" />
                <div className="card-body">
                  <div className="card-text">
                    <p className="veg-name">Potato</p>
                    <p className="veg-price">price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-3 col-sm-12 about">
              <div className="card styles=width: 20rem;">
                <img src={Gourd} className="card-img-top" alt="Gourd" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="veg-name">Bitter-Gourd</h6>
                    <h6 className="veg-price">price</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
