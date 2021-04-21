import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        
    }

    return (
        <header className = "header">
            <h1>{props.title}</h1>
            <Button title = 'Add' color = 'green' onClick = {onClick}/>
        </header>
    )
}
export default Header