import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Editbook({ book, setBook, editid }) {

    const findedit = book.find(b => b.id === editid)

    const [edit, setEdit] = useState([]);

    const Formik = useFormik({
        initialValues: {
            id: editid,
            title: findedit.title,
            image: findedit.image,
            author: findedit.author,
            edition: findedit.edition,
            pages: findedit.pages
        },
        })

    useEffect(()=>{
        setEdit(Formik.values)
    },[Formik.values])

   function Handleedit(){
    setBook(book.map(b=>{
        if(b.id===editid){
            return edit;
        }else{
            return b
        }
    }))


   }


    return (

        <div className='container'>
            <form onSubmit={Formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Book Title : </label>
                    <input type="text" className="form-control" id="title" autoComplete='off' value={Formik.values.title} onChange={Formik.handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label fw-bold">Book Image_Url : </label>
                    <input type="text" className="form-control" id="image" autoComplete='off' value={Formik.values.image} onChange={Formik.handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">Book Author Name : </label>
                    <input type="text" className="form-control" id="author" autoComplete='off' value={Formik.values.author} onChange={Formik.handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="edition" className="form-label fw-bold">Book Edition No : </label>
                    <input type="number" className="form-control" id="edition" autoComplete='off' value={Formik.values.edition} onChange={Formik.handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="pages" className="form-label fw-bold">Book Page Count : </label>
                    <input type="number" className="form-control" id="pages" autoComplete='off' value={Formik.values.pages} onChange={Formik.handleChange} required />
                </div>
                <Link to='/Book-List'><button className="btn btn-primary bg-success m-3 pe-4 ps-4">Back</button></Link>

                <Link to='/Book-List'><button type="submit" className="btn btn-primary" onClick={Handleedit}>Submit</button></Link>
            </form>
        </div>
    )
}

export default Editbook