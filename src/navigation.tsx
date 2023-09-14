import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

interface CustomLinkProps{
    to: string;
    children: ReactNode;
}
 const Navigation = () => {
    return(
    <nav className="nav">
      <ul>
        <Link to="/"></Link>
        <CustomLink to="/admin">admin</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/products">products</CustomLink>
        <CustomLink to="/frakt">frakt</CustomLink>
        <CustomLink to="/betala">betalning</CustomLink>
      </ul>
    </nav>
    );
}

export default Navigation;

function CustomLink({ to, children, ...props}: CustomLinkProps){
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      );
}