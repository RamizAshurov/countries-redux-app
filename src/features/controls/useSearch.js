import { useDispatch, useSelector } from 'react-redux'
import { setSearch, selectSearch } from './controlsSlice'

const useSearch = () => {
    const dispatch = useDispatch()
    const search = useSelector(selectSearch)

    const handleSearch = (value) => dispatch(setSearch(value))

    return [search, handleSearch]
}

export { useSearch }