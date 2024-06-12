export default function NavBar({children}) {
    return (
    <button class="cs-button" data-filter="one">
        {children}
    </button>
    );
}