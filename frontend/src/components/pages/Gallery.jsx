import React, { useState, useEffect } from 'react';
import { baseURL } from '../../environment/index';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

import './gallery.css';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Container,
    Typography
} from '@mui/material';

function Gallery() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editArtworkId, setEditArtworkId] = useState(null);
    const [imageFile, setImageFile] = useState(null); 

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };
    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'ml_default');

        const response = await fetch('https://api.cloudinary.com/v1_1/dns9ltiu8/image/upload', {
            method: 'POST',
            body: formData,
          });

        const data = await response.json();
        setNewArtwork(prevState => ({
            ...prevState,
            imageUrl: data.secure_url,
        }));
    };
    const [userRole, setUserRole] = useState(localStorage.getItem('isAdmin') === 'true' ? 'admin' : 'user');

    useEffect(() => {
      
        // This will set the initial value of userRole based on what's in localStorage when the component first mounts.
        const handleStorageChange = () => {
            setUserRole(localStorage.getItem('isAdmin') === 'true' ? 'admin' : 'user');
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup function: Will remove the event listener when the component is unmounted.
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const [artworks, setArtworks] = useState([]);
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        artist: '',
        description: '',
        imageUrl: '',
        category: '',
        price: '',
    });

    useEffect(() => {
        console.log("Component Mounted.");
        console.log("Initial Artworks:", artworks);
        console.log("Is Admin?", userRole === 'admin');
        console.log("Fetching artworks from:", `${baseURL}/artwork`);
        fetch(`${baseURL}/artwork`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched artworks:", data);
                setArtworks(data);
            })
            .catch(error => console.error('Error fetching artworks:', error));
    }, []);


    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArtwork(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('No token found in localStorage. Redirecting to login...');
            return;
        }
        
        const url = editArtworkId ? `${baseURL}/artwork/${editArtworkId}` : `${baseURL}/artwork`;
        const method = editArtworkId ? 'PUT' : 'POST';
    
        // Check and delete _id for POST method
        if (method === 'POST' && newArtwork._id) {
            delete newArtwork._id;
        }
    
        // Log the values of newArtwork and method
        console.log("Submitting with artwork data:", newArtwork);
        console.log("Using HTTP method:", method);
    
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newArtwork),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if(editArtworkId) {
                setArtworks(prevArtworks => prevArtworks.map(artwork => artwork._id === editArtworkId ? data : artwork));
                setEditArtworkId(null); // Reset editArtworkId
            } else {
                setArtworks(prevArtworks => [...prevArtworks, data]);
            }
                 // Clearing the form fields
        setNewArtwork({
            title: '',
            artist: '',
            description: '',
            imageUrl: '',
            category: '',
            price: '',
        });

        // Optionally hide the form after editing
        setIsFormVisible(false);
    })
        
        .catch(error => console.error('Error processing artwork:', error));
    };
    
 

    const handleEdit = (artwork) => {
        setEditArtworkId(artwork._id);
        setNewArtwork(artwork);
        setIsFormVisible(true);
    };
    
    const handleDelete = (_id) => {
        console.log("Deleting artwork with ID:", _id);
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('No token found in localStorage. Redirecting to login...');
            return;
        }
        
        fetch(`${baseURL}/artwork/${_id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            setArtworks(artworks.filter(artwork => artwork._id !== _id));
        })
        .then(() => {
            console.log("Deleted artwork with ID:", _id);
        })
        .catch(error => console.error('Error deleting artwork:', error));
    };
    
    
    
    return (
        <Container className="gallery-container">
             {console.log("Rendering Gallery")}
            <Typography variant="h4" gutterBottom>Gallery</Typography>

            {userRole === 'admin' && (
                <>
                    <Button onClick={() => setIsFormVisible(true)}>
                        Add New Artwork
                    </Button>
                    
                    {isFormVisible && (
                        <div className={`slide-in-form ${isFormVisible ? 'open' : ''}`}>
                            <Button onClick={() => setIsFormVisible(false)}>
                                Close
                            </Button>

                            <form onSubmit={handleSubmit}>
                                                      <input type="file" onChange={handleImageChange} />
                            <Button onClick={handleImageUpload}>Upload Image</Button>
    <TextField
        fullWidth
        margin="normal"
        name="title"
        label="Title"
        value={newArtwork.title}
        onChange={handleInputChange}
        sx={{ fontSize: '1.1rem', padding: '8px 0' }}
    />

    <TextField
        fullWidth
        margin="normal"
        name="artist"
        label="Artist"
        value={newArtwork.artist}
        onChange={handleInputChange}
        sx={{ fontSize: '1.1rem', padding: '8px 0'}}
    />

    <TextField
        fullWidth
        margin="normal"
        name="description"
        label="Description"
        value={newArtwork.description}
        onChange={handleInputChange}
        sx={{ fontSize: '1.1rem', padding: '8px 0' }}
    />

    <TextField
        fullWidth
        margin="normal"
        name="imageUrl"
        label="Image URL"
        value={newArtwork.imageUrl}
        onChange={handleInputChange}
        sx={{ fontSize: '1.1rem', padding: '8px 0' }}
    />

    <FormControl fullWidth margin="normal" sx={{ padding: '8px 0' }}>
        <InputLabel sx={{ fontSize: '1.1rem' }}>Category</InputLabel>
        <Select
            name="category"
            value={newArtwork.category}
            onChange={handleInputChange}
            sx={{ fontSize: '1.1rem' }}
        >
            <MenuItem value="Painting">Painting</MenuItem>
            <MenuItem value="Sculpture">Sculpture</MenuItem>
            <MenuItem value="Photography">Photography</MenuItem>
            <MenuItem value="Wooden art piece">Wooden Art piece</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
        </Select>
    </FormControl>

    <TextField
        fullWidth
        margin="normal"
        name="price"
        label="Price"
        value={newArtwork.price}
        onChange={handleInputChange}
        type="number"
        sx={{ fontSize: '1.1rem', padding: '8px 0' }}
    />

    <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '16px' }}>
        Add Artwork
    </Button>
</form>



                        </div>
                    )}
                </>
            )}
      <div className="artworks-display">
            {console.log("Rendering artworks. Count:", artworks.length)}

            <CloudinaryContext cloudName="CLOUD_NAME">
                {artworks.map(artwork => (
                    <div key={artwork._id} className="artwork-card">
                        <Image publicId={artwork.imageUrl}>
                            <Transformation height="300" crop="scale" />
                        </Image>
                        <Typography className="artwork-card-title" variant="h6">{artwork.title}</Typography>
                        <Typography variant="subtitle1">By: {artwork.artist}</Typography>
                        <Typography variant="body2">{artwork.description}</Typography>
                        <Typography variant="body1">Category: {artwork.category}</Typography>
                        <Typography variant="body1">Price: ${artwork.price}</Typography>
                        {userRole === 'admin' && (
                            <div className="artwork-card-actions">
                                <Button onClick={() => handleEdit(artwork)}>Edit</Button>
                                <Button onClick={() => handleDelete(artwork._id)}>Delete</Button>
                            </div>
                        )}
                    </div>
                ))}
            </CloudinaryContext>

        </div>


           
        </Container>
    );
}

export default Gallery;




