import { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";


function CreateBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [desc, setDesc] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleBookSave = () => {
        const data = {
            title,
            author,
            publishYear,
            desc
        };
        setLoading(true);
        axios
            .post("https://bookstorebackend-hzhl.onrender.com/books", data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book Created Successfully", { variant: "success" });
                navigate("/");
            })
            .catch((err) => {
                setLoading(false);
                enqueueSnackbar("Something Went Wrong", { variant: "error" });

                console.log(err);
            })
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4 text-center">
                Create Book
            </h1>
            {
                loading ?
                    (
                        <Spinner />
                    )
                    :
                    (
                        " "
                    )
            }

            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="text-xl mr-4 text-gray-500">
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border-2 border-gray-500 px-4 py-2 w-full  rounded-xl" />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="border-2 border-gray-500 px-4 py-2 w-full  rounded-xl" />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
                        <input
                            type="number"
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                            className="border-2 border-gray-500 px-4 py-2 w-full rounded-xl" />
                    </div>
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Book Description</label>
                        <textarea
                            type="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className="border-2 border-gray-500 px-4 py-2 w-full rounded-xl" />
                    </div>
                    <div className="flex justify-center text-center ">
                        <button className="p-2 bg-sky-300 m-8 rounded w-40" onClick={handleBookSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook
