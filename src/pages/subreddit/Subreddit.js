import styles from './Subreddit.module.css'
import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SubredditDetails from "../../components/subredditDetails/SubredditDetails";

function SubRedditPage() {

    const {subredditId} = useParams();

    // State management
    const [data, setData] = React.useState({});
    const [error, toggleError] = React.useState(false);
    const [loading, toggleLoading] = React.useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            toggleLoading(true);
            toggleError(false);
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`, {
                    cancelToken: source.token
                });
                setData(result.data.data);
            } catch (e) {
                if (!axios.isCancel(e)) {
                    console.error(e);
                    toggleError(true);
                }
            }
            toggleLoading(false);
        }

        fetchData();
        return function cleanup() {
            if (!data) {
                source.cancel();
            }
        };
    }, [])

    return (
        <>
            <Header>
                {error &&
                    <span className={styles.message}>Oops... something went terribly wrong! Please try again.</span>}
                {loading && <span className={styles.message}>Loading...</span>}
                <h1 className={styles["header-title"]}>{data.display_name_prefixed}</h1>
                <h6>Subreddit specifications</h6>
            </Header>
            <main className={styles.main}>
                <section className={styles.section}>
                    {error && <span
                        className={styles.message}>Oops... something went terribly wrong! Please try again.</span>}
                    {loading ? <span
                        className={styles.message}>Loading...</span> : <SubredditDetails
                        title={data.display_name}
                        description={data.public_description}
                        subscribers={data.subscribers}
                    />}
                    <Link className={styles.link} to="/"><span>&#60; </span>Take me back</Link>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SubRedditPage;