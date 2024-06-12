export default function NavBar({children, onClick}) {
    return (
    <button onClick={onClick} className="cs-button" data-filter="one">
        {children}
    </button>
    );
}