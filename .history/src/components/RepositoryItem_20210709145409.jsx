export function RepositoryItem(props) {
    return (
        <li >
            <strong>{props.repository || 'Default'}</strong>
            <p>Formos in React</p>
            <a href="">
                Acessar repositório
            </a>
        </li>
    );
}