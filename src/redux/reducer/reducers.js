import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const crearCita = createAsyncThunk(
  'citas/crearCita',
  async (cita) => {
    const response = await axios.post('https://citasync.onrender.com/citas', cita);
    return response.data;
  }
);

export const actualizarCita = createAsyncThunk(
  'citas/actualizarCita',
  async ({ id, actualizarCita }) => {
    const response = await axios.put(
      `https://citasync.onrender.com/citas/${id}`,
      actualizarCita
    );
    return response.data;
  }
);

export const eliminarCita = createAsyncThunk(
  'citas/eliminarCita',
  async (id) => {
    await axios.delete(`https://citasync.onrender.com/citas/${id}`);
    return id;
  }
);

export const buscarCitas = createAsyncThunk(
  'citas/buscarCita',
  async (terminoBusqueda) => {
    const response = await axios.get(
      `https://citasync.onrender.com/citas?q=${terminoBusqueda}`
    );
    return response.data;
  }
);

export const recuperarCita = createAsyncThunk(
  'citas/recuperarCita',
  async () => {
    const response = await axios.get('https://citasync.onrender.com/citas');
    return response.data;
  }
);

const citasSlice = createSlice({
  name: 'citas',
  initialState: {
    citas: [],
    buscarCitas: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(crearCita.fulfilled, (state, action) => {
        state.citas.push(action.payload);
      })
      .addCase(actualizarCita.fulfilled, (state, action) => {
        const index = state.citas.findIndex(
          (cita) => cita.id === action.payload.id
        );
        if (index !== -1) {
          state.citas[index] = action.payload;
        }
      })
      .addCase(eliminarCita.fulfilled, (state, action) => {
        const index = state.citas.findIndex((cita) => cita.id === action.payload);
        if (index !== -1) {
          state.citas.splice(index, 1);
        }
      })
      .addCase(buscarCitas.fulfilled, (state, action) => {
        state.buscarCitas = action.payload;
      })
      .addCase(recuperarCita.fulfilled, (state, action) => {
        state.citas = action.payload;
      });
  },
});

export const { actions } = citasSlice;
export default citasSlice.reducer;
