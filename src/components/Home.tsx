import { useState, useEffect } from 'react';
import './Home.css';

interface Trip {
  entryDate: string;
  exitDate: string;
  dateDifference: number;
  country: string;
}

// function formatDate(date: Date) {
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const day = date.getDate().toString().padStart(2, '0');
//   return `${year}-${month}-${day}`;
// }

function formatDateMMDDYYYY(date: Date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

const Home = () => {
  const [entryDate, setEntryDate] = useState<string>('');
  const [exitDate, setExitDate] = useState<string>('');
  const [today, setToday] = useState<Date>(new Date());
  const [sixMonthsAgo, setSixMonthsAgo] = useState<Date>(new Date());
  // const [formattedDate, setFormattedDate] = useState<string>('');
  const [formattedSixMonthsAgo, setFormattedSixMonthsAgo] =
    useState<string>('');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [totalDays, setTotalDays] = useState(0);
  const [allowFuture, setAllowFuture] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [daysRemaining, setDaysRemaining] = useState('');

  const countries = [
    'Austria',
    'Belgium',
    'Croatia',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Italy',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
  ];

  useEffect(() => {
    const now = new Date();
    setToday(now);

    const sixMonthsAgoDate = new Date(now);
    sixMonthsAgoDate.setDate(sixMonthsAgoDate.getDate() - 180);
    setSixMonthsAgo(sixMonthsAgoDate);

    // setFormattedDate(formatDate(now));
    setFormattedSixMonthsAgo(formatDateMMDDYYYY(sixMonthsAgoDate));
  }, []);

  const addTrip = () => {
    if (!entryDate || !exitDate) {
      alert('Please select both entry and exit dates.');
      return;
    }
    const entryDateObj = new Date(entryDate);
    const exitDateObj = new Date(exitDate);
    const minDate = new Date(formattedSixMonthsAgo);
    const maxDate = allowFuture ? new Date(9999, 11, 31) : new Date();

    if (
      entryDateObj < minDate ||
      entryDateObj > maxDate ||
      exitDateObj > maxDate
    ) {
      alert(
        'Invalid date selection. Please ensure dates are within the allowed range.'
      );
      return;
    }
    if (exitDateObj <= entryDateObj) {
      alert('Exit date must be after entry date.');
      return;
    }

    const dateDifference =
      Math.abs(exitDateObj.getTime() - entryDateObj.getTime()) /
        (1000 * 60 * 60 * 24) +
      1;

    const countryFromForm = selectedCountry || 'Not specified';

    const newTrip: Trip = {
      entryDate: entryDate,
      exitDate: exitDate,
      dateDifference: dateDifference,
      country: countryFromForm,
    };

    console.log('New trip: ', newTrip);

    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    setEntryDate('');
    setExitDate('');
    setSelectedCountry('');

    const newTotalDays = updatedTrips.reduce(
      (acc, trip) => acc + trip.dateDifference,
      0
    );
    setTotalDays(newTotalDays);

    calculateDaysRemaining(newTotalDays);
  };

  const calculateDaysRemaining = (totalDays: number) => {
    const remainingDays = 90 - totalDays;
    setDaysRemaining(remainingDays.toString());
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="date-input-div">
          <h1>Schengen Visa Calculator</h1>
          <div className="date-wrapper">
            <div className="dates-div">
              <h4>
                Today:{' '}
                <span className="highlight-date">
                  {today.toLocaleDateString()}
                </span>{' '}
              </h4>
              <h4>
                180 Days Ago:
                <span className="highlight-date">
                  {sixMonthsAgo.toLocaleDateString()}
                </span>
              </h4>
            </div>
            <input
              type="date"
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              placeholder="Entry date"
              min={formattedSixMonthsAgo}
              max={
                allowFuture
                  ? formatDateMMDDYYYY(new Date(9999, 11, 31))
                  : formatDateMMDDYYYY(today)
              }
            />
            <input
              type="date"
              value={exitDate}
              onChange={(e) => setExitDate(e.target.value)}
              placeholder="Entry date"
              min={formattedSixMonthsAgo}
              max={
                allowFuture
                  ? formatDateMMDDYYYY(new Date(9999, 11, 31))
                  : formatDateMMDDYYYY(today)
              }
            />

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="country-select"
            >
              <option value="">Select a country (optional)</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <div className="future-option">
              <input
                type="checkbox"
                id="allowFuture"
                checked={allowFuture}
                onChange={() => setAllowFuture(!allowFuture)}
              />
              <label htmlFor="allowFuture">Allow selecting future dates</label>
            </div>

            <div className="display-text">
              <h4>
                Entry Date:{' '}
                {entryDate && entryDate !== 'Invalid Date' ? (
                  <span className="highlight-date">
                    {new Date(entryDate).toLocaleDateString()}
                  </span>
                ) : (
                  ''
                )}
              </h4>
              <h4>
                Exit Date:{' '}
                {exitDate && exitDate !== 'Invalid Date' ? (
                  <span className="highlight-date">
                    {new Date(exitDate).toLocaleDateString()}
                  </span>
                ) : (
                  ''
                )}
              </h4>
            </div>

            <button onClick={addTrip}>Add Trip</button>

            <h4>
              Total Days: <span className="highlight-date">{totalDays}</span>{' '}
            </h4>
            <h4>
              Days Remaining:
              <span className="highlight-date">{daysRemaining}</span>
            </h4>
            <p>Please allow +/- 1 day margin of error.</p>

            <div className="trips-div">
              <h4>Saved Trips</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Trip #</th>
                    <th>Entry Date</th>
                    <th>Exit Date</th>
                    <th>Days</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map((trip, index) => (
                    <tr key={index}>
                      <td data-th="Trip #">{index + 1}</td>
                      <td data-th="Entry Date">
                        {formatDateMMDDYYYY(new Date(trip.entryDate))}
                      </td>{' '}
                      <td data-th="Exit Date">
                        {formatDateMMDDYYYY(new Date(trip.exitDate))}
                      </td>{' '}
                      <td data-th="Days">{trip.dateDifference}</td>
                      <td data-th="Country">{trip.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
