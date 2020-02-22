import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import { useTranslation } from 'react-i18next';

const endpoint = "http://127.0.0.1:4001"

function TemperatureText() {
  const { t } = useTranslation();
  return <>{t('temperature')}</>
}

function TemperatureCard() {
  const [timezone, setTimezone] = useState('')
  const [summary, setSummary] = useState('')
  const [temperature, setTemperature] = useState('')

  const [time, setTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)

    const socket = socketIOClient(endpoint);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        await socket.emit("location", { lat, long });
      })
    }

    socket.on('FromAPI', data => {
      setTimezone(data.timezone);
      setSummary(data.hourly.summary);
      setTemperature(data.currently.temperature);
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.textAlign}>
        <p>{time}</p>
        {timezone && <p>{timezone}</p>}
      </div>

      {temperature && summary &&
        <div style={styles.textAlign}>
          <p><TemperatureText /> {temperature} °F.</p>
          <p>{summary}</p>
        </div>
      }
    </div >
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    minHeight: '250px',
  },
  textAlign: {
    width: '50%',
    textAlign: 'center'
  }
}

export default TemperatureCard;
