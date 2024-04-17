import "./HomePage.scss";
import { Link, useNavigate } from "react-router-dom";
import heropic from "../../assets/heropic1.jpg";
import Quagga from "quagga";
import React, { useState, useEffect, useRef } from "react";

function HomePage() {
  const [barcode, setBarcode] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (isScanning) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scannerRef.current,
            constraints: {
              facingMode: "environment",
            },
          },
          decoder: {
            readers: [
              "code_128_reader",
              "ean_reader",
              "ean_8_reader",
              "code_39_reader",
              "code_39_vin_reader",
              "codabar_reader",
              "upc_reader",
              "upc_e_reader",
            ],
          },
          locate: true,
        },
        (err) => {
          if (err) {
            console.error(err);
            setIsScanning(false); //stop scanning
            return;
          }
          Quagga.start();
        }
      );
      Quagga.onDetected((data) => {
        setBarcode(data.codeResult.code);
        Quagga.stop();
        setIsScanning(false); // stop scanning
        navigate(`/recommendation/${data.codeResult.code}`);
      });
      return () => {
        Quagga.stop();
      };
    }
  }, [isScanning]); // change status for button
  const toggleScanner = () => {
    setIsScanning(!isScanning);
  };

  return (
    <div className="homepage">
      <div className="homepage__hero">
        <img src={heropic} alt="beer toasting" className="homepage__heropic" />
        <div className="homepage__buttons-container">
          <Link to="/FoodDrinksMenu">
            <button className="homepage__button">MENU</button>
          </Link>
        </div>
      </div>
      {/* <div className="btn-container">
        <button onClick={toggleScanner} className="btn btn--hero">
          {isScanning ? "STOP SCANNING" : "SCAN TO ADD TO CLOSET"}
        </button>
      </div> */}
      {isScanning && (
        <div
          ref={scannerRef}
          style={{ width: "100%", minHeight: "200px" }}
          className="hero__image"
        ></div>
      )}
    </div>
  );
}

export default HomePage;
