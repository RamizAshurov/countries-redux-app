import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

import { useFetchCountryByName } from '../features/country-detail/useFetchCountryByName';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { status, error, country } = useFetchCountryByName(name)

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      { status === "loading" && <h4>Loading...</h4>}
      { status === "rejected" && <h4>{error}</h4>}
      { status === "recievied" && <Info push={navigate} {...country} />}
    </div>
  );
};
