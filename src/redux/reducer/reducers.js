import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const crearCita = createAsyncThunk(
  'citas/crearCita',
  async (cita) => {
    const response = await axios.post('/citas', cita);
    return response.data;
  }
);

export const actualizarCita = createAsyncThunk(
  'citas/actualizarCita',
  async ({ id, cita }) => {
    const response = await axios.put(
      `/citas/${id}`,
      cita
    );
    return response.data;
  }
);

export const eliminarCita = createAsyncThunk(
  'citas/eliminarCita',
  async (id) => {
    await axios.delete(`/citas/${id}`);
    return id;
  }
);

export const getCitas = createAsyncThunk(
  'citas/buscarCita',
  async () => {
    const response = await axios.get('/citas');
    return response.data;
  }
);

export const recuperarCita = createAsyncThunk(
  'citas/recuperarCita',
  async (id) => {
    const response = await axios.get(`/citas/${id}`);
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
      .addCase(getCitas.fulfilled, (state, action) => {
        state.buscarCitas = action.payload;
      })
      .addCase(recuperarCita.fulfilled, (state, action) => {
        state.citas = action.payload;
      });
  },
});

export const { actions } = citasSlice;
export default citasSlice.reducer;
