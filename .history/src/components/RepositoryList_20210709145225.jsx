import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository="unform"/>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>
        </section>
    );
}