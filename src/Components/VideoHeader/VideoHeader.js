import React from 'react';
import './VideoHeader.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIconOutlined from '@material-ui/icons/CameraAltOutlined';

const VideoHeader = () => {

    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h2>Reels</h2>
            <CameraAltIconOutlined />
        </div>
    );
}

export default VideoHeader;
