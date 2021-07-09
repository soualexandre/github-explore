import React, {useState} from 'react'
import './atyles/global.scss'
import { Counter } from './components/conter'
import { RepositoryList } from './components/RepositoryList'

export function App() {
    const {counter , setCounter} = useState({
        counter: 0
    })
    function handleCounter(){
    setCounter(counter+1)
    }

    return (
        <>
            <RepositoryList />
            <Counter onclick={handleCounter}/>
        </>
    )
}