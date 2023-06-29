import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Content from './components/Content';

function App() {
  const API_KEY = 'at_yK030z7XVnWPh3TywxJutuxE9PRxO';
  const [dataGeo, setDataGeo] = useState({});
  const [inputUser, setInputUser] = useState('');
  const [coordinate, setCoordinate] = useState([-6.21462, 106.84513]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputType = /[A-z]/.test(inputUser) ? 'domain' : 'ipAddress';

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${inputType}=${inputUser}`;
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Data not available');
        const data = await response.json();

        setDataGeo({
          'ip address': data.ip,
          location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
          timezone: `UTC ${data.location.timezone}`,
          isp: data.isp,
        });
        setCoordinate([data.location.lat, data.location.lng]);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => getData())();
  }, [inputType, inputUser]);

  const getIpAddressHandler = (ip) => {
    setInputUser(ip);
  };

  return (
    <div className="h-screen flex flex-col">
      <Content
        onGetIpAddress={getIpAddressHandler}
        dataGeo={dataGeo}
        isError={error}
        isLoading={isLoading}
      />
      <Header />
      <Map coordinate={coordinate} />
    </div>
  );
}

export default App;
