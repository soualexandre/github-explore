import React from 'react'
import './atyles/global.scss'
import { Counter } from './components/conter'
import { RepositoryList } from './components/RepositoryList'

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}