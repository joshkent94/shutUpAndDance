import './ThreadOverview.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { likeThreadToggle, selectThreads } from "../../../utils/state/forumSlice";
import { selectUserId } from '../../../utils/state/userSlice';

export default function ThreadOverview(props) {
    const thread = props.thread;
    const threadId = thread.id;
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const threads = useSelector(selectThreads);

    const likeToggle = () => {
        if (threads.length !== 0) {
            dispatch(likeThreadToggle({
                threadId,
                method: 'threadOverviews'
            }));
        } else {
            dispatch(likeThreadToggle({
                threadId,
                method: 'mostLiked'
            }));
        };
    };

    let likeIcon;
    if (thread.likes.includes(userId)) {
        likeIcon = <button className="browse-threads-icon" onClick={likeToggle}><i className="bi bi-hand-thumbs-up-fill"></i></button>;
    } else {
        likeIcon = <button className="browse-threads-icon" onClick={likeToggle}><i className="bi bi-hand-thumbs-up"></i></button>;
    };

    return (
        <div className="content-container thread animate__animated animate__fadeIn">
            <div className="thread-container">
                <p className='thread-title'>{thread.title}</p>
                <p className='thread-initial-comment'>{thread.initial_comment}</p>
            </div>
            <div className="thread-container thread-sub-info">
                <p>Created by: {thread.first_name} {thread.last_name}</p>
                <div className='icon-section'>
                    <div className='like-info'>
                        <p>{likeIcon}</p>
                        <p>{thread.likes.length}</p>
                    </div>
                    <Link to={`${thread.id}`}><FontAwesomeIcon icon={faEye} className='browse-threads-icon' /></Link>
                </div>
            </div>
        </div>
    );
};