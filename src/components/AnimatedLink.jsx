
import { useNavigate } from "react-router-dom";

export default function AnimatedLink({ to, name, children, className }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (document.startViewTransition) {
            document.startViewTransition(() => navigate(to));
        } else {
            navigate(to);
        }
    };

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}
