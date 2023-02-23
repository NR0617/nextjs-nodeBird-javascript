import React from "react";
import Link from "next/link";
import propTypes from "prop-types";

const PostCardContent = ({ postData }) => {
    //첫 번째 게시글 #해시태그 #익스프레스
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((el, i) => {
                if (el.match(/(#[^\s#]+)/)) {
                    return (
                        <Link href={`/hashtag/${el.slice(1)}`} key={i}>
                            <a>{el}</a>
                        </Link>
                    );
                }
                return el;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: propTypes.string.isRequired,
};

export default PostCardContent;
