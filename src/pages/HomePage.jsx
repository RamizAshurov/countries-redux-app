import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { loadingCountries } from '../store/countries/countries-actions'
import { selectCountriesInfo, selectAllCountries, selectFilteredCountries } from '../store/countries/countries-selectors';
import { selectControls } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { status, error, qty } = useSelector(selectCountriesInfo)
  const controls = useSelector(selectControls)
  const countries = useSelector(state => selectFilteredCountries(state, controls))

  useEffect(() => {
    dispatch(loadingCountries())
  }, [])

  return (
    <>
      <Controls />

      { status === "loading" && <h4>{status}</h4> }
      { status === "rejected" && <h4>{error}</h4> }

      { status === "recievied" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}

    </>
  );
};
