import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

// use axios
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const[user, setUser] = useState({})
  const fetchUsers = async() =>{
    const response = await axios.get('http://localhost:8000/')
    return setUsers(response.data)
  }
 
  const fetchUser = async(id) =>{
    const response = await axios.get(`http://localhost:8000/${id}`)
    return setUser(response.data)
  }
  const createOrEditUser = async(id) =>{
    if(user.id){
      await axios.put(`http://localhost:8000/${id}`, user)
    }else{
      await axios.post(`http://localhost:8000/`, user)
    }
   await fetchUsers()
   await setUser({id: 0, name: '', email: '',password: ''})
  }
  const deleteUser = async(id) =>{
    await axios.delete(`http://localhost:8000/${id}`)
    await fetchUsers()
  }
  return (
    <div>
       <AppBar position="secondary">
        <Toolbar>
          <h1>CRUD</h1>
          
        </Toolbar>
      </AppBar>
      <Box m={10}>
    <TableContainer>
    {/* <TextField value={user.id} type="hidden"/> */}

      <Table aria-label="simple table">
        <TableBody>
      <TableRow>
            <TableCell>
              <TextField value={user.name} onChange={(e) => setUser({...user, name:e.target.value})} id="standard-basic" label="Name"/>
            </TableCell>
            <TableCell>
              <TextField value={user.email} onChange={(e) => setUser({...user, email:e.target.value})} id="standard-basic" label="Email"/>
            </TableCell>
            <TableCell>
              <TextField value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} id="standard-basic" label="Password"/>
            </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
              <Button onClick={()=> createOrEditUser()} variant="contained" color="success">
                Submit
              </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>
              <Button onClick={()=> fetchUser(row.id)} variant="contained" color="secondary">
                Edit
              </Button>
              </TableCell>
              <TableCell>
              <Button onClick={()=> deleteUser(row.id)} variant="contained" color="success">
                Delete
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </div>
  );
}

export default App;
