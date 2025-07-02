import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('http://localhost:5000/admin/images', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(response.data.images);
    };

    fetchImages();
  }, [token]);

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', newImage);
    formData.append('title', 'New Image');

    try {
      const response = await axios.post('http://localhost:5000/admin/images/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImages([...images, response.data.image]);
    } catch (err) {
      console.error('Error uploading image', err);
    }
  };

  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`http://localhost:5000/admin/images/${imageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(images.filter((image) => image._id !== imageId));
    } catch (err) {
      console.error('Error deleting image', err);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      <button onClick={handleImageUpload}>Upload Image</button>

      <div>
        {images.map((image) => (
          <div key={image._id}>
            <img src={`http://localhost:5000${image.url}`} alt={image.title} />
            <button onClick={() => handleDelete(image._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
