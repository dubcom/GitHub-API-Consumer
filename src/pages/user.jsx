import React, { useContext } from 'react';
import { useQuery } from '../hooks/useQuery';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import { Link } from 'react-router-dom';


import { context } from '../context';

export default function UserList() {
    const ctx = useContext(context);
    const query = useQuery();

    return (
        <Container>
{/*             
            <Header username={query.get('username')} /> */}
            {(ctx.usersData.items).map(user => (
            <UserContainer >
                    <React.Fragment >
                        <img src={user.avatar_url} alt={user.login} width={30} />
                        <Link to={`/?username=${user.login}`}>{user.login} </Link>
                    </React.Fragment>
               
            </UserContainer>
            ))
        }
        </Container>
    );

}

