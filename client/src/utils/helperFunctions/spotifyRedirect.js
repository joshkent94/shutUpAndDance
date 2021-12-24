export const spotifyRedirect = () => {
    const dataToSend = {
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.NODE_ENV === 'production' ? 'https://app.shutupanddance.io/spotify' : 'https://localhost:3000/spotify',
        scope: 'user-read-private ugc-image-upload streaming user-read-playback-position',
        state: process.env.REACT_APP_SPOTIFY_STATE
    };
    const queryString = new URLSearchParams(dataToSend).toString();
    window.location.replace(`https://accounts.spotify.com/authorize?${queryString}`);
};