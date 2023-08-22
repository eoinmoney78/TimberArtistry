import React, { useState, useEffect } from 'react';
import { baseURL } from '../../environment/index';
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
        fetch(`${baseURL}/artwork`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setArtworks(data))
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

        fetch(`${baseURL}/artwork`, {
            method: 'POST',
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
            setArtworks(prevArtworks => [...prevArtworks, data]);
        })
        .catch(error => console.error('Error creating artwork:', error));
    };

    return (
        <Container className="gallery-container">
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
        sx={{ fontSize: '1.1rem', padding: '8px 0' }}
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
    {artworks.map(artwork => (
        <div key={artwork.id} className="artwork-card">
            <img src={artwork.imageUrl} alt={artwork.title} />
            <Typography className="artwork-card-title" variant="h6">{artwork.title}</Typography>
            <Typography variant="subtitle1">By: {artwork.artist}</Typography>
            <Typography variant="body2">{artwork.description}</Typography>
            <Typography variant="body1">Category: {artwork.category}</Typography>
            <Typography variant="body1">Price: ${artwork.price}</Typography>
        </div>
    ))}
</div>


            {/* Display the artworks (or any other gallery logic) goes here */}
        </Container>
    );
}

export default Gallery;




