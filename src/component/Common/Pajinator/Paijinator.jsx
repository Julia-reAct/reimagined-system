import React from 'react';
import s from './Pajinator.module.css';


const Paginator = (props ) => {

    let pageCounts = Math.ceil(props.totalPeopleCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i)
    }
    return (
            <div className={s.num}>
                {pages.map(p => {
                    debugger
                    return <span id={s.page} className={props.currentPage === p && s.selectedPage}
                                 onClick={(e)=>{props.onPageChanged(p) }}>{p}</span>})}
            </div>

    );

}

export default Paginator

/* props.setIsFollowingInProgress(true, u.id)
                                  peopleAPI.deleteUsersUnfollow(u.id)
                                        .then(data => {
                                            if(data.resultCode == 0){
                                                props.unfollowSuccess(u.id)
                                            }
                                            props.setIsFollowingInProgress(false, u.id)
                                        })*/
/* props.setIsFollowingInProgress(true, u.id)
                                   peopleAPI.postUsersFollow(u.id)
                                        .then(data => {
                                           if(data.resultCode == 0){
                                               props.followSuccess(u.id)
                                           }
                                            props.setIsFollowingInProgress(false, u.id)
                                        })*/