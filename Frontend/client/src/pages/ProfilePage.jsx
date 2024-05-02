import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import { deleteLoginToken } from '../redux/Slice/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async (e) => {
        dispatch(deleteLoginToken());
        navigate("/login");
    }
    const [addprop, setaddprop] = useState(false);
    const [address, setadress] = useState();
    const [description, setdescription] = useState();
    const [price, setprice] = useState();
    const [bought, setbought] = useState(false);
    const addproperty = async(e) => {
        e.preventDefault();
        const res = await axios.post("/prop/add-property",{address,description,price,bought});
        console.log(res.data)
    }
    return (
        <>
            <Navbar />
            <button onClick={logout}>Logout</button>
            <button onClick={()=>setaddprop(!addprop)}>Add Property</button>
            {addprop?(
                <>
                    <form>
                        <input type='text' placeholder='Enter Address' onChange={(e) => setadress(e.target.value)}></input>
                        <input type='text' placeholder='Enter Description' onChange={(e) => setdescription(e.target.value)}></input>
                        <input type='number' placeholder='Enter Price' onChange={(e) => setprice(e.target.value)}></input>
                        <select onChange={(e) => setbought(e.target.value === 'true')}>
                            <option value='false'>False</option>
                            <option value='true'>True</option>
                        </select>
                        <button onClick={addproperty}>Submit</button>
                    </form>
                </>
            ):(
                <></>
            )}
        </>
    )
}

export default ProfilePage;