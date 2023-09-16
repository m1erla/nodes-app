import { useState } from "react";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { filterNote } from "../redux/notes/notesSlice";


function TextArea() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [item, setItem] = useState("");
    const [color, setColor] = useState("primary");
    const [search, setSearch] = useState("");
    const setYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        const day = date.getDate();
        const month = date.getMonth();
        const fullDate = `${month}.${day}.${year}`;
        return fullDate;
    }

    const handleSubmit = (e) => {
        if(!title) return;
        e.preventDefault();

        const fullDate = setYear();

        dispatch(addNote({
            id: nanoid(), item, title, color, fullDate
        }));
        setTitle("");
        setItem("");
        setColor("");
    };
    const handleSubmitSearch = (text) => {
        text.preventDefault();
        setSearch(text);
        dispatch(filterNote(search));

        setSearch("");
    }
   return (
    <div>
               
    <div className="container-fluid" style={{alignItems: 'center'}}>
        <span></span>
        <h1 className="center" >Node App - React.js</h1>
    </div>
<div className="form-floating m-5 px-5" >
    <div>
        <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Subject"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div>
        <textarea
            className="form-control"
            placeholder="Write here whatever you want to say that to me!" id="floatingTextarea2"
            style={{ height: "250px" }}
            value={item}
            onChange={(e) => setItem(e.target.value)}
        ></textarea>
    </div>
    <div className='d-flex justify-content-between' style={{ padding: 5, border: "1px solid #dee2e6" }}>

        <div>
            <button
                type="button"
                className="btn btn-secondary rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("secondary")}
            ></button>
            <button
                type="button"
                className="btn btn-primary rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("primary")}

            ></button>
            <button
                type="button "
                className="btn btn-warning rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("warning")}
            ></button>
            <button
                type="button"
                className="btn btn-danger rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("danger")}
            ></button>
            <button
                type="button"
                className="btn btn-success rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("success")}
            ></button>
            <button
                type="button"
                className="btn btn-light rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("light")}
            ></button>
            <button
                type="button"
                className="btn btn-info rounded-circle d-inline p-3 me-1"
                onClick={() => setColor("info")}
            ></button>
        </div>
        <span></span>
        <form className="d-flex" role="search" onSubmit={handleSubmitSearch}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button
                className="btn btn-secondary me-3"
                type="submit"
            >Search</button>
             <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
            >Submit</button>
        </form>
       
</div>
</div>
</div >

   )
}

export default TextArea;