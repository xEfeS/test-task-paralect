import React from 'react';
import {useSelector} from "react-redux";
import Repo from "./Repo";
import Users from "./Users";
import UserError from "./UserError";
import StartingPage from "./StartingPage";
import Loader from "./Loader";


const Main = () => {

    const repos = useSelector((state) => state.repos.items)
    const isLoading = useSelector((state) => state.users.isLoading)
    const users = useSelector(state => state.users.users)
    const error = useSelector(state => state.users.error)


    if (error) return <UserError/>;
    if (!users) return <StartingPage/>;
    if (isLoading) return <Loader/>;

    return (
        <section>
            <div className='main__container container'>
                <Users user={users} />
                <Repo userLogin={users.login} userRepos={users.public_repos} repo={repos} perPage={4} />
            </div>
        </section>
    );
};

export default Main;