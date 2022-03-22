import { useState, useEffect } from 'react'

import './Pagination.css'

const OPTIONS = [
    { value: 6, name: "6개씩 보기"},
    { value: 9, name: "9개씩 보기"},
    { value: 12, name: "12개씩 보기"},
]

const Pagination = ({page, setPage, limit, setLimit}) => {

    const [curPage, setCurPage] = useState(page)

    const gotoPage = (page) => {
        if (!isNaN(Number(page))) {
            setPage(page)
        } else if (page === 'prev') {
            setPage(v => v-1)
        } else if (page === 'next') {
            setPage(v => v+1)
        } else {
            return
        }
    }

    const inputSubmit = (e) => {
        if (e.key === 'Enter') {
            gotoPage(curPage)
        }
    }

    const changeLimit = (value) => {
        setLimit(value)
    }

    useEffect(() => {
        setCurPage(page)
    }, [page])


    return (
        <div className={"pagination"}>
            <div style={{width: "30%"}}></div>
            <div className={"page"}>
                <button onClick={() => gotoPage(1)} disabled={page === 1}>{"<<"}</button>
                <button onClick={() => gotoPage('prev')} disabled={page === 1}>{"<"}</button>
                <input value={curPage} onChange={(e) => setCurPage(e.target.value)} onKeyUp={(e) => inputSubmit(e)} />
                <button onClick={() => gotoPage('next')}>{">"}</button>
            </div>
            <div className={"limit"}></div>
            <select className={"dropdown"} onChange={(e) => changeLimit(Number(e.target.value))}>
                {OPTIONS.map(option => {
                    return (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                        )})}
            </select>
        </div>
    )
}

export default Pagination