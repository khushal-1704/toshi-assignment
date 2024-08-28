import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface CountryData {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

interface Props {
  mapData: CountryData[];
}

const Maps: React.FC<Props> = ({ mapData }) => {
  const createCustomFlagIcon = (
    flagUrl: string = "https://img.icons8.com/?size=100&id=mzUisDYTyeVz&format=png&color=000000"
  ) => {
    return new Icon({
      iconUrl: flagUrl,
      iconSize: [20, 20],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
  };

  if (!mapData.length) {
    return null;
  }

  return (
    <MapContainer
      center={[42.8333, 12.8333]}
      zoom={13}
      scrollWheelZoom={false}
      style={{width: '70%' , minWidth: '300px' , height: '700px'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData.length > 0 &&
        mapData.map((data: CountryData, index: number) => {
          return (
            <Marker
              position={[data.countryInfo.lat, data.countryInfo.long]}
              icon={createCustomFlagIcon(data.countryInfo.flag)}
              key={data.countryInfo._id}
            >
              <Popup>
                <h1 className="text-sm font-bold">{data.country}</h1>
                <h3 className="text-gray-500">//{data.continent}</h3>
                <div>
                  <div>
                    <span className="font-medium">total cases:</span>
                    <span className="text-gray-500"> {data.cases}</span>
                  </div>
                  <div>
                    <span className="font-medium">active cases:</span>
                    <span className="text-gray-500"> {data.active}</span>
                  </div>
                  <div>
                    <span className="font-medium">recovered cases:</span>
                    <span className="text-gray-500"> {data.recovered}</span>
                  </div>
                  <div>
                    <span className="font-medium">death cases:</span>
                    <span className="text-gray-500"> {data.deaths}</span>
                  </div>
                  <div>
                    <span className="font-medium">total population:</span>
                    <span className="text-gray-500"> {data.population}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Maps;
