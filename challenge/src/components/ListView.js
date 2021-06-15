import React, { Component } from "react";
import Data from "../data/data.json";
import Property from "../images/property1.png";
import Map from "../images/map.png";
import Toilet from "../images/Toilet.png";
import Bedrooms from "../images/Bedrooms.png";
import Living from "../images/Living_room.png";
import Tfl from "../images/tfl.png";

export class ListView extends Component {
  state = {
    moreInfo: false,
  };
  render() {
    const handleChange = (e) => {
      this.setState({ divcontainer: !this.state.divcontainer });
    };
    const showMoreInfo = this.state.divcontainer;

    return (
      <div className="d-flex justify-content-center bg-list">
        <div className="wrap">
          <div className="scroll my-5">
            <p className="mx-4">15 search results</p>
            {Data.map((property, index) => {
              return (
                <div key={index}>
                  <button onClick={handleChange}>
                    <div className="single row">
                      <div className="col-6">
                        <div className="thumbnail">
                          <img src={Property} alt="" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="info">
                          <p>
                            <strong>{property.property_name}</strong>
                          </p>
                          <p>
                            <strong>{property.price}</strong>
                          </p>
                          <div className="d-flex">
                            <img src={Bedrooms} alt="" height="20" width="28" />
                            <p className="mx-2">{property.bedrooms}</p>
                            <img src={Toilet} alt="" height="20" width="28" />

                            <p className="mx-2">{property.toilets}</p>
                            <img src={Living} alt="" height="20" width="28" />
                            <p className="mx-2">{property.living_room}</p>
                          </div>
                          <div className="d-flex">
                            <img src={Tfl} alt="" height="24" width="24" />
                            <p className="mx-2">{property.location}</p>
                          </div>
                          <p>{property.move_in_date}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  {showMoreInfo && (
                    <div className="info row">
                      <div className="col-12">
                        <hr />
                        <img className="img-map" src={Map} alt="" />
                        <p className="mt-3">
                          Situated on the 12th floor of the Crawford Building
                          this modern one bedroom flat is available to rent end
                          of June. Early viewings are highly recommended.
                          <br />
                          <br />
                          This modern apartment features an open plan kitchen/
                          living area, a large bathroom and a double sized
                          bedroom with fitted wardrobe. Other benefits include,
                          floor to ceiling windows and a 24 hour concierge
                          service.
                          <br />
                          <br />
                          The Crawford building itself has it's own entrance to
                          Aldgate East Underground station which makes it ideal
                          for transport links."
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
