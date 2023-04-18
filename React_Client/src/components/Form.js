import React, { useState } from 'react';
import axios from 'axios';
import "../style/form.css"
import Loader from './Loader';
const Form = ({ prediction,close, setPrediction, loader, setLoader }) => {
    const [file, setFile] = useState(null);

    const uploadFile = (e) => {
        setLoader(true)
        close(false)
        e.preventDefault();
        let filer = document.getElementById('file').files[0];
        if (!filer) {
            alert('Please select a file');
            setLoader(false);
            return;
        }

        setFile(filer);
        console.log(file);
        const formData = new FormData();

        formData.append("file", file);
        axios.post(("http://8d50-35-237-211-15.ngrok-free.app/" +'uploader'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

            .then(res => {
                console.log(res.data);
                let p;
                p = res.data;
                setPrediction(p);
                setLoader(false)
                close(true)
            })
            .catch(err => console.log(err));

    }


    const onChangeFile = (e) => {  // e is the event   e.target.files[0] is the file   e.target.files[0].name is the file name             
        setFile(e.target.files[0])
        console.log(e.target.files[0].name)
    }
    return (
        <div style={{
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "width": "50%",
            "height": "50%",
            "borderRadius": "10px",
            "backgroundColor": "rgba(204, 238, 255, 0.8)",
            "padding": "20px",
            "boxShadow": "0px 0px 10px black"

        }}>
            {loader ?
                // <div style={{
                //     display: "flex",
                //     flexDirection: "column",
                //     justifyContent: "center",
                //     alignItems: "center",
                //     width: "50%",
                //     height: "50%",
                   
                // }}>
                //     <div class="loader">
                //         <div class="face">
                //             <div class="circle"></div>
                //         </div>
                //         <div class="face">
                //             <div class="circle"></div>
                //         </div>
                //     </div>
                // </div> 
                <Loader/>
                :

                <div style={{
                    "height": "100vh",
                    "width": "100%",
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "center",
                    "alignItems": "center"

                }}><h1 style={{
                    "fontSize": "50px",
                    "fontWeight": "bold",
                    "color": "#0081C9",
                    "font-family": "'Roboto', sans-serif'"
                }}>Brain Tumor Detection</h1>


                    <p style={{
                        "fontSize": "20px",
                        "color": ""
                    }}>
                        please upload your mri scan in jpg format
                    </p>

                    <div style={
                        {
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "center",
                            "alignItems": "center",
                            "width": "100%",
                            "borderRadius": "10px",
                         
                           
                            "padding": "20px",
                        }

                    } >
                        <input className='file-field '
                            style={{
                                width: "300px",
                                "height": "50px",
                                "borderRadius": "5px",
                                "margin": "10px",
                                "padding": "10px",
                                "border": "1px solid black",
                                backgroundColor: "white"
                            }}
                            type="file" name="file" id="file" onChange={onChangeFile} />
                        <button className='btn  ebtn'
                            style={{
                                marginTop: "20px",
                            }}
                            onClick={uploadFile}>
                            Upload
                        </button>

                    </div>
                </div>
            }
        </div >
    )
};

export default Form;