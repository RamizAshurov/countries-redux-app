import { useDispatch, useSelector } from 'react-redux'
import { selectRegion, setRegion } from './controlsSlice'

const useRegion = () => {
    const dispatch = useDispatch()
    const region = useSelector(selectRegion)

    const toggleRegion = (region) => dispatch(setRegion((region?.value || "")))

    return [region, toggleRegion]
}

export { useRegion }