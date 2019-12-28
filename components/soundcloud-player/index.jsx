import React from 'react';
import PropTypes from 'prop-types';

const SoundcloudPlayer = props => {
    const {
        artwork,
        autoplay,
        buying,
        color,
        comments,
        download,
        itemId,
        liking,
        playcount,
        related,
        sharing,
        size,
        type,
        user,
        visual
    } = props;

    let height = 300;
    if (size === 'md') { height = 450; }
    if (size === 'lg') { height = 600; }
    if (type === 'track' && !visual) { height = 166; }
    if (type === 'user' && !visual) { height = 450; }

    const url = `https://w.soundcloud.com/player/?url=http://api.soundcloud.com/${type}s/${itemId}&amp;color=%23${color}&amp;auto_play=${autoplay}&amp;buying=${buying}&amp;liking=${liking}&amp;download=${download}&amp;sharing=${sharing}&amp;show_artwork=${artwork}&amp;show_comments=${comments}&amp;show_playcount=${playcount}&amp;show_user=${user}&amp;hide_related=${related}&amp;visual=${visual}&amp;callback=true`;

    return (
        <iframe title={`Soundcloud ${type} widget`} width="100%" height={height} scrolling="no" frameBorder="no" allow="autoplay" src={url} />
    );
}

SoundcloudPlayer.propTypes = {
    artwork: PropTypes.bool,
    autoplay: PropTypes.bool,
    buying: PropTypes.bool,
    color: PropTypes.string,
    comments: PropTypes.bool,
    download: PropTypes.bool,
    itemId: PropTypes.number.isRequired,
    liking: PropTypes.bool,
    playcount: PropTypes.bool,
    related: PropTypes.bool,
    sharing: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    type: PropTypes.oneOf(['track', 'user']).isRequired,
    user: PropTypes.bool,
    visual: PropTypes.bool
}

SoundcloudPlayer.defaultProps = {
    artwork: true,
    autoplay: false,
    buying: true,
    color: 'ff5500',
    comments: true,
    download: true,
    liking: true,
    playcount: true,
    related: true,
    sharing: true,
    size: 'sm',
    user: true,
    visual: true
}

export default SoundcloudPlayer;