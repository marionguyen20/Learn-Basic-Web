import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return (
        <header className = "header">
            <h1>{props.title}</h1>
            {   location.pathname === '/' &&
                <Button 
                title = {props.onShowTask ? 'Close' : 'Add'} 
                color = {props.onShowTask ? 'red' : 'green'} 
                onClick = {props.onAdd}
                 />
            }
        </header>
    )
}
export default Header