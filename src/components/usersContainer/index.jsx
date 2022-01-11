import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Container,
    NumbersContainer
} from "./styles";

const UsersNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    console.og(props?.userData);

    return (
        <Container>
            {(props.userData).map(user => (
                <NumbersContainer key={user.id} onClick={() => handleOnClick(`/user/${user.login}`)}>
                    <h2>{user.name}</h2>
                    <p>{user.login}</p>
                    <p>{user.bio}</p>
                  </NumbersContainer>
            ))}
        </Container>
    );
}

export default UsersNumbers;