import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

const ToDo = () => {
    const [data, setData] = useState('');

    const submit = async () => {
        try {
            const res = await axios.post('http://localhost:5500/items', { item: data })
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box display="flex" flexDirection={'row'}>
            <TextField type={'text'} placeholder="Add a note" value={data} onChange={e => setData(e.target.value)} fullWidth="50px"></TextField>
            <Button variant='contained' sx={{ marginLeft: '5px' }} onClick={submit}>Add</Button>
        </Box>
    )
}



export default ToDo;