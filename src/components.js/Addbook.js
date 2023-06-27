import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

function Addbook({ book, setBook }) {


    const Formik = useFormik({
        initialValues: {
            title: "",
            image: "",
            author: "",
            edition: "",
            pages: ""
        },
        onSubmit: values => {

            setBook([...book, {
                id: book.length + 1,
                title: Formik.values.title,
                image: Formik.values.image,
                author: Formik.values.author,
                edition: Formik.values.edition,
                pages: Formik.values.pages
            }])

            Formik.values.title = "";
            Formik.values.image = "";
            Formik.values.author = "";
            Formik.values.edition = "";
            Formik.values.pages = "";


        }


    })



    return (
        <div className='container'>
            <form onSubmit={Formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Book Title : </label>
                    <input type="text" className="form-control" id="title" autoComplete='off' value={Formik.values.title} onChange={Formik.handleChange} required />
                    {/* {Formik.errors.title?<span>Formik.errors.title</span>:null} */}
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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Addbook