import React from 'react';
import PropTypes from 'prop-types';

const YoutubePlayer = props => {
    const {
        autoplay,
        branding,
        color,
        controls,
        height,
        inline,
        itemId,
        loop,
        privacy,
        type,
        width
    } = props;

    let youtubeUrl = `https://www.youtube.com/embed`;
    if (privacy) { youtubeUrl = `https://www.youtube-nocookie.com/embed`; }

    if (type === 'playlist') {
        youtubeUrl += `?listType=playlist&list=PL${itemId}&`;
    } else if (type === 'search') {
        youtubeUrl += `?listType=search&list=${itemId}&`;
    } else if (type === 'user') {
        // This doesn't work I think
        youtubeUrl += `?listType=user_uploads&list=${itemId}&`;
    } else {
        youtubeUrl += `/${itemId}?`;
    }

    let ytAutoplay = 0;
    if (autoplay) { ytAutoplay = 1; }
    youtubeUrl += `autoplay=${ytAutoplay}`;

    let ytBranding = 0;
    if (!branding) { ytBranding = 1; }
    youtubeUrl += `&modestbranding=${ytBranding}`;

    let ytControls = 0;
    if (controls) { ytControls = 1; }
    youtubeUrl += `&controls=${ytControls}`;

    let ytInline = 0;
    if (inline) { ytInline = 1; }
    youtubeUrl += `&playsinline=${ytInline}`;

    let ytLoop = 0;
    if (loop) { ytLoop = 1; }
    youtubeUrl += `&loop=${ytLoop}`;
    if (loop && type === 'video') { youtubeUrl += `&playlist=${itemId}`; }

    youtubeUrl += `&color=${color}`;

    return (
        <iframe title={`Youtube ${type} widget`} width={width} height={height} src={youtubeUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    )
};

YoutubePlayer.propTypes = {
    autoplay: PropTypes.bool,
    branding: PropTypes.bool,
    color: PropTypes.oneOf(['red', 'white']),
    controls: PropTypes.bool,
    height: PropTypes.number,
    inline: PropTypes.bool,
    itemId: PropTypes.string.isRequired,
    loop: PropTypes.bool,
    privacy: PropTypes.bool,
    type: PropTypes.oneOf(['playlist', 'search', 'video']).isRequired,
    width: PropTypes.number
}

YoutubePlayer.defaultProps = {
    autoplay: false,
    branding: false,
    color: 'red',
    controls: true,
    height: 315,
    inline: false,
    loop: false,
    privacy: false,
    width: 560
}

export default YoutubePlayer;