import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput
} from './styles';

import {api } from '../../services/client';

import { context } from '../../context';

const Header = props => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await api.get(`${props.username}`);
                const repos = await api.get(`/${props.username}/repos`);
 console.log(response.data);
                ctx.setUserData(response.data);
                ctx.setUserRepos(repos.data);
            } catch(err) {
                console.log(err);
            }
        })()
    }, [props.username]);

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />

                <Link to={`/?username=${searchValue}`}>
                    <FiSearch size={15} />
                </Link>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;