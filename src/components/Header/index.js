import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'img/logo.svg';
import './header.scss';

const NavBar = ({ location: { pathname } }) => {
    const styles = value => (value === pathname ? 'active' : '');

    return (
        <ul className="navbar">
            <li className={styles('/')}>
                <Link to="/">о профсоюзе</Link>
            </li>
            <li className={styles('/manifest')}>
                <Link to="/manifest">Манифест</Link>
            </li>
            <li className={styles('/news')}>
                <Link to="/news">Новости</Link>
            </li>
            <li className={styles('/docs')}>
                <Link to="/docs">Документы</Link>
            </li>
        </ul>
    );
};

class Header extends React.Component {
    componentDidUpdate(prevProps) {
        console.log(prevProps.history, this.props.history);
    }

    render() {
        const { history, minified } = this.props;

        return (
            <div className="header">
                <div className="header__logo">
                    <Logo className={minified ? 'header__logo__minified' : ''} />
                </div>
                <div className="header__content">
                    {minified ? (
                        <div className="header__content__description minified">
                            <p className="description__title">
                                <span>ПРОФСОЮЗ</span>МОЛОДОСТЬ
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="header__content__description">
                                <p className="description__hotline">
                                    ГОРЯЧАЯ ЛИНИЯ
                                    <div className="hotline__block" />
                                </p>
                                <p className="description__title">МОЛОДОСТЬ</p>
                            </div>
                        </>
                    )}
                    <NavBar location={history.location} />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
