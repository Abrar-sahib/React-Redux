const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
    },
    
})

// export const { setProducts, setStatus } = productSlice.actions;
export default userSlice.reducer;

// Thunks
export const fetchUser = createAsyncThunk('user/fetch', async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    // console.log(userdata.users);
    return data
})