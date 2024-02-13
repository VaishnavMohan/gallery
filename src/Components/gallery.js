import React, {useState} from 'react'
import UploadForm from './uploadForm';
import Photo from './photo';
import './Gallery.css'


function Gallery() {

const[photos, setPhotos] = useState([]);

const handleUpload = (newPhoto) =>{
    setPhotos([...photos, newPhoto]);
};

  return (
    <div className="gallery">
<UploadForm onUpload={handleUpload}/>
<div className="gallery-item">
    {photos.map((photo, index)=>(
        <Photo key={index} src={photo}/>
    ))}
</div>

    </div>
  )
}

export default Gallery