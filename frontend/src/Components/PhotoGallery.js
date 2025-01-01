import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://plus.unsplash.com/premium_photo-1697730020118-46dffe1c5b8c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Algeria" />
                <img src="https://plus.unsplash.com/premium_photo-1697729942579-93186371254e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lebanon" />
                <img src="https://images.unsplash.com/photo-1712488070063-696f22cce02c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Qatar" />
                <img src="https://images.unsplash.com/flagged/photo-1554992369-085dc418ee00?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="UAE" />
                <img src="https://plus.unsplash.com/premium_photo-1694475218266-b93569487419?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kuwait" />
                <img src="https://images.unsplash.com/photo-1585134339424-0fc98d0bfe86?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Oman" />
                <img src="https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Turkey" />
                <img src="https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Iran" />
                <img src="https://images.unsplash.com/photo-1731355775921-11078a2edb84?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jordan" />
            </div>
            <button className="view-more-button">
                VIEW MORE <ArrowForwardIosIcon style={{ fontSize: 20 }} />
            </button>
        </div>
    )
}

export default PhotoGallery;