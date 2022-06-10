import styles from './Post.module.css'
import React from 'react';
import {Link} from "react-router-dom";
import formatNumbers from "../../helpers/formatNumbers";
import limitStringLength from "../../helpers/limitStringLength";

function Post({title, titleUrl, subreddit, subredditPrefix, comments, ups}) {
    return (
        <article className={styles.article}>
            <a className={styles["post-title"]} href={titleUrl}>{limitStringLength(title)}</a>
            <span>
                <Link className={styles.link}
                      to={`/subreddit/${subreddit}`}>{subredditPrefix}</Link>
                <p>Comments {formatNumbers(comments)} - UPS {formatNumbers(ups)}</p>
            </span>
        </article>
    );
}

export default Post;
