import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { useCountries } from '../features/countries/useCountries';

export const HomePage = () => {
  const navigate = useNavigate();

  const [ status, error, countries ] = useCountries()

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
