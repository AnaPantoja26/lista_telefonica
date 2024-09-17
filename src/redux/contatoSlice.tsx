import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

interface ContatoState {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (
      state,
      action: PayloadAction<{ id: number; updatedData: Partial<Contato> }>
    ) => {
      const { id, updatedData } = action.payload
      const index = state.contatos.findIndex((contato) => contato.id === id)
      if (index !== -1) {
        state.contatos[index] = { ...state.contatos[index], ...updatedData }
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer
