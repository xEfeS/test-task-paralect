import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import RepoItem from "./RepoItem";
import ReactPaginate from 'react-paginate';
import {getRepo} from "../redux/actions/getData";

const Repo = ({repo, userLogin, userRepos, perPage}) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(userRepos / perPage);
    const step = page * perPage - perPage;

    const handlePageClick =  (e) => {
        const currentPage = e.selected + 1;
        dispatch(getRepo(userLogin, currentPage));
        setPage(currentPage);
    };

    if (!userRepos)
        return (
            <h1>Repository list is empty</h1>
        );

    return (
        <div className='repositories'>
            <h2 className='repositories__title'>Repositories ({userRepos})</h2>
            <ul className='repositories__list'>{
                repo.map((rep) => (
                    <RepoItem key={rep.id} url={rep.html_url} name={rep.name} description={rep.description}/>
                ))
            }</ul>
            {pageCount > 1 && (
                <div className='repositories__pagination'>
                    <p className='repositories__pagination-info'>
                        {step + 1} - {step + repo.length} of {userRepos} items
                    </p>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </div>
            )}
        </div>
    );
};

export default Repo;

