import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from './themeSlice'

const useTheme = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
      }, [theme]);
    
    const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"))
    
    return [theme, toggleTheme]
}

export { useTheme }