import { NavLink } from 'react-router-dom';

function StandardLink({ path, name, className }) {
    console.log(path)
    return (
        <NavLink to={path} className={`${className} }`}>
            {name}
        </NavLink>
    );
}

export default StandardLink;
