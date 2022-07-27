import moment from "moment";
import React, {FC} from "react";

type propsType = {
    content: string
    date: string
}
const Comment: FC<propsType> = ({content, date}) => {

    const [dateComponents, timeComponents] = date.split(' ');
    const howTime = moment(dateComponents, "YYYYMMDD").fromNow();

    return (
        <div className="comments__item">
            <div className="comments__item-box">
                <img src={require("../images/user_avatar.png")} alt="" className="avatar"/>
                <div className="comments__item-inner">
                    <div className="comments__item-author">Frank Boehm</div>
                    <div className="comments__item-date">{howTime}</div>
                </div>
                <a href="#" className="comments__item-actions">
                    <svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="menu copy 3" fillRule="evenodd" clipRule="evenodd"
                              d="M0 2.5C0 1.11806 1.11806 0 2.5 0C3.88194 0 5 1.11806 5 2.5C5 3.88194 3.88194 5 2.5 5C1.11806 5 0 3.88194 0 2.5ZM12 2.5C12 3.88194 10.8819 5 9.5 5C8.11806 5 7 3.88194 7 2.5C7 1.11806 8.11806 0 9.5 0C10.8819 0 12 1.11806 12 2.5ZM16.5 0C15.1181 0 14 1.11806 14 2.5C14 3.88194 15.1181 5 16.5 5C17.8819 5 19 3.88194 19 2.5C19 1.11806 17.8819 0 16.5 0Z"
                              fill="#CFCFCF"/>
                    </svg>
                </a>
            </div>
            <div className="comments__item-text">
                {content}
            </div>
        </div>
    )
}

export default Comment