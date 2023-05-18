import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "font-bold text-pink"
                    : "font-bold text-navy"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;