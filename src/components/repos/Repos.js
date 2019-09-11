import React from 'react'
import PropTypes from 'prop-types';
import ReportItem from './RepoItem';

const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repo.propTypes = {
    repos: PropTypes.array.isRequired
}
export default Repos
