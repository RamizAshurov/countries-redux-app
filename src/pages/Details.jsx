import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

import { useDispatch, useSelector } from 'react-redux'
import { clearCountry, loadingCountryByName } from '../store/country-details/country-details-actions'; 
import { selectCountryDetails } from '../store/country-details/country-details-selectors';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { status, error, country } = useSelector(selectCountryDetails)

  useEffect(() => {
    dispatch(loadingCountryByName(name))

    return () => dispatch(clearCountry())
  }, [name])

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
