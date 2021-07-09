import { RepositoryItem } from "./RepositoryItem";

const repsoitoryName = 'unform';

export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem/>
            </ul>
        </section>
    );
}