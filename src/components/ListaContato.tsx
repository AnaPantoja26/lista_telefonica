import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'
import {
  adicionarContato,
  removerContato,
  editarContato
} from '../redux/contatoSlice'
import {
  Container,
  Form,
  Input,
  Button,
  List,
  ListItem,
  EditButton,
  DeleteButton
} from './ListaContatosStyle'

const ListaContatos: React.FC = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [editar, setEditar] = useState<number | null>(null)

  const contatos = useSelector((state: RootState) => state.contatos.contatos)
  const dispatch = useDispatch<AppDispatch>()

  const adicionarOuAtualizar = () => {
    if (editar !== null) {
      dispatch(
        editarContato({ id: editar, updatedData: { nome, email, telefone } })
      )
      setEditar(null)
    } else {
      dispatch(adicionarContato({ id: Date.now(), nome, email, telefone }))
    }
    setNome('')
    setEmail('')
    setTelefone('')
  }

  const editando = (contato: {
    id: number
    nome: string
    email: string
    telefone: string
  }) => {
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
    setEditar(contato.id)
  }

  const removendo = (id: number) => {
    dispatch(removerContato(id))
  }

  return (
    <Container>
      <Form>
        <Input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <Button onClick={adicionarOuAtualizar}>
          {editar ? 'Atualizar' : 'Adicionar'}
        </Button>
      </Form>
      <List>
        {contatos.map((contato) => (
          <ListItem key={contato.id}>
            <div>
              {contato.nome} - {contato.email} - {contato.telefone}
            </div>
            <EditButton onClick={() => editando(contato)}>Editar</EditButton>
            <DeleteButton onClick={() => removendo(contato.id)}>
              Excluir
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default ListaContatos
