import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../Redux/Actions'
// import { getUser } from '../../../Redux/Actions'
// import { ActionType, actionTypes } from '../../../Redux/Actions/actionTypes'
import { UsersState } from '../../../Redux/Reducers/userReducer'
import { Container, Content, Image } from './styles'

export const Home:React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector<UsersState, UsersState['users']>((state: UsersState) => state.users)
  const loading = useSelector<UsersState, UsersState['loading']>((state: UsersState) => state.loading)

  const getSomeUser = () => {
    dispatch(getUser())
  }

  useEffect(() => {
  }, [users])
  return (
        <Container>
            <Content>
              {loading && (<h1>Carregando...</h1>)}
              {users && users[0].picture
                ? users.map((user, index) => (<>
                  <Image key={`user-${index}`} src={user.picture}>
                  </Image>
                  <h1>
                    {`Nome: ${user.name}`}
                  </h1>
                  </>))
                : (<h1>Sem Imagem</h1>)}

              <button onClick={() => getSomeUser()}>
                Gerar um usuário
              </button>
            </Content>
        </Container>
  )
}
