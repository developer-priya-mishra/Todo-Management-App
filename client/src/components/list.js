import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState, React } from "react";
import axios from 'axios'

const List = () => {

    const [list, setList] = useState([]);
    const [isUpdate, setUpdate] = useState('');
    const [newUpdate, setNewUpdate] = useState('')

    useEffect(() => {
        const getAllItems = async () => {
            try {
                const items = await axios('http://localhost:5500/allitems');
                setList(items.data)

            } catch (err) {
                console.log(err)
            }
        }
        getAllItems()
    }, [list]);

    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5500/delete/${id}`);
            const newListItem = list.filter(item => item._id !== id);
            setList(newListItem);
        } catch (err) {
            console.log(err);
        }
    }

    const edit = async () => {
        try {
            const edits = await axios.put(`http://localhost:5500/update/${isUpdate}`, { item: newUpdate })
            setNewUpdate('');
            setUpdate('');
            console.log(edits.data)

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div >
            {
                list.map(item => (
                    <Box display="flex" flexDirection={'row'} sx={{ margin: "10px" }}>
                        {
                            isUpdate === item._id
                                ?
                                <>
                                    <>
                                        <TextField type={'text'} placeholder="Edit a note" onChange={e => { setNewUpdate(e.target.value) }} value={newUpdate} fullWidth="50px">{item}</TextField>
                                        <Button variant='contained' sx={{ marginLeft: '5px' }} onClick={edit}>Update</Button>
                                    </>
                                </>
                                :
                                <>
                                    <p>{item.item}</p>
                                    <Button variant="contained" sx={{ marginLeft: 'auto' }} color="warning" onClick={() => { setUpdate(item._id) }}>Edit</Button>
                                    <Button variant="contained" sx={{ marginLeft: '10px' }} color="error" onClick={() => { deleteData(item._id) }}>Delete</Button>
                                </>
                        }

                    </Box>
                )

                )
            }
        </div>
    )
}

export default List;