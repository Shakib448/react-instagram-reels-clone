import React from 'react';
import './VideoFooter.css'

import { Button, Avatar } from "@material-ui/core";
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, likes, shares, avatarSrc, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel}🙂<Button>Follow</Button>
                </h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteRoundedIcon className="videoFooter__icon" />
                <Ticker mode='smooth'>
                    {({ index }) => (
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter__actions">
                <div className="videoFooter__actionsLeft">
                    <FavoriteIcon fontSize="small" />
                    <ModeCommentIcon fontSize="small" />
                    <SendIcon fontSize="small" />
                    <MoreHorizIcon fontSize="small" />
                </div>
                <div className="videoFooter__actionsRight">
                    <div className="videoFooter__stat">
                        <FavoriteIcon fontSize="small" />
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter__stat">
                        <ModeCommentIcon fontSize="small" />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17076388_219461748523097_8639577121087291392_a.jpg?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&amp;_nc_ohc=fhxNajACj8sAX9qBMM1&amp;oh=07204821ce88a0a388c82bca1044ca64&amp;oe=5F8077C6"

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66449921_2469701349978040_6498531139437723648_n.jpg?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&amp;_nc_ohc=zvQfk68FqeEAX-CUq9C&amp;oh=65a8fc62a5894fe41cfca2d596ba41ac&amp;oe=5F8242FE"

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106105443_222867472032067_5165701253741493230_n.jpg?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&amp;_nc_ohc=jVhNRTtWRIkAX8oFFUj&amp;oh=dbea14102b503f8069c8d147d854897a&amp;oe=5F82CFD1"

// "https://instagram.fdac5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101703932_264332984810770_2870985139712688128_n.jpg?_nc_ht=instagram.fdac5-1.fna.fbcdn.net&amp;_nc_ohc=Y_4CUP4wbEsAX_UqEYK&amp;oh=1ee9be5ef2cf00d9bd7f300357002672&amp;oe=5F8395FD"