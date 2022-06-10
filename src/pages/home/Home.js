import styles from './Home.module.css'
import React, {useEffect} from 'react';
import logo from '../../assets/logo.png';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Post from "../../components/post/Post";

function HomePage() {

    const [data, setData] = React.useState([]);
    const [error, toggleError] = React.useState(false);
    const [loading, toggleLoading] = React.useState(false);


    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            toggleError(false);
            toggleLoading(true);
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15", {
                    cancelToken: source.token
                });
                setData(result.data.data.children);
            } catch (e) {
                console.log(3);
                if (!axios.isCancel(e)) {
                    console.error(e);
                }
            }
            toggleLoading(false);
        }

        fetchData();
        return function cleanup() {
            if (data.length !== 0) {
                source.cancel();
            }
        };
    }, []);

    return (
        <>
            <Header>
                <img className={styles.img} src={logo} alt="logo"/>
                <h1 className={styles["header-title"]}>Reddit</h1>
            </Header>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles["page-title"]}>Hottest posts</h1>
                    <h6 className={styles.h6}>on Reddit right now</h6>

                    <ul className={styles.ul}>
                        {loading && <span className={styles.message}>Loading...</span>}
                        {error && <span className={styles.message}>Oops.. something went terribly wrong! Please try again.</span>}
                        {data && data.map((data) => {
                            return (
                                <Post
                                    key={data.data.id}
                                    title={data.data.title}
                                    titleUrl={data.data.url}
                                    subreddit={data.data.subreddit}
                                    subredditPrefix={data.data.subreddit_name_prefixed}
                                    comments={data.data.num_comments}
                                    ups={data.data.ups}
                                />
                            )
                        })}
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default HomePage;
