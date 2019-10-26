import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinners';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        getUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    render() {
        const { name, company, avatar_url, bio, blog, login, location, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;

        const { loading } = this.props;

        if (loading) return <Spinner />;
        return (
            <Fragment>
                <div className="container mt-2">
                    <Link to='/user-finder' className='btn btn-light'>Back to Search</Link>
                    <div className="float-right">
                        Hireable: {' '}
                        {hireable ? (
                            <i className='fas fa-check text-success' />
                        ) : <i className='fas fa-times-circle text-danger' />}
                    </div>

                    <div className="row mt-2 no-gutters">
                        <div className="col-md-6">
                            <div className="card user-details">
                                <div className="card-body text-center">
                                    <img src={avatar_url} className='rounded-circle img-fluid' style={{ 'width': '200px', 'margin': 'auto' }} alt="" />
                                    <h2>
                                        {name}
                                    </h2>
                                    <p>Location: {location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card user-details">
                                <div className="card-body text-center">
                                    {bio && (
                                        <Fragment>
                                            <h4>Bio</h4>
                                            <p>{bio}</p>
                                        </Fragment>
                                    )}
                                    <a href={html_url} className="btn btn-outline-dark" rel="noopener noreferrer" target="_blank">Visit user Profile</a>

                                    <ul className="mt-4 list-unstyled">
                                        <li>
                                            {login && (
                                                <Fragment>
                                                    <strong>Username: </strong> {login}
                                                </Fragment>
                                            )}
                                        </li>
                                        <li>
                                            {company && (
                                                <Fragment>
                                                    <strong>Company: </strong> {company}
                                                </Fragment>
                                            )}
                                        </li>
                                        <li>
                                            {blog && (
                                                <Fragment>
                                                    <strong>Website: </strong> <a href={blog}>{blog}</a>
                                                </Fragment>
                                            )}
                                        </li>
                                    </ul>
                                    <div className="card-body text-center">
                                    <div className="badge badge-dark mx-2">Followers: {followers}</div>
                                    <div className="badge badge-secondary mx-2">Following: {following}</div>
                                    <div className="badge badge-success mx-2">Public Repos: {public_repos}</div>
                                    <div className="badge badge-primary mx-2">Public Gists: {public_gists}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
