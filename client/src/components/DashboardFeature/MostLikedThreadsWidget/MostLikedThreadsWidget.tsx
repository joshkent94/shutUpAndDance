import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
    getMostLikedThreads,
    selectMostLiked,
} from '../../../utils/state/forumSlice'
import ThreadOverview from '../../ForumFeature/ThreadOverview/ThreadOverview'
import { useAppDispatch } from '../../../utils/state/store'
import './MostLikedThreadsWidget.scss'

export default function MostLikedThreadsWidget() {
    const dispatch = useAppDispatch()
    const mostLiked = useSelector(selectMostLiked)
    const firstRender = useRef(true)

    // get most liked threads on load if state is empty
    useEffect(() => {
        if (document.cookie && firstRender.current) {
            firstRender.current = false
            dispatch(getMostLikedThreads())
        }
    })

    return (
        <div className="content-container widget animate__animated animate__fadeIn">
            <h5 className="sub-heading content-container">
                Most Liked Threads
            </h5>
            <div className="widget-content">
                {mostLiked.map((thread) => {
                    return <ThreadOverview key={thread.id} thread={thread} />
                })}
            </div>
        </div>
    )
}
