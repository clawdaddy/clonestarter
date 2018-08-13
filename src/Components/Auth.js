import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain:process.env.REACT_APP_AUTH0_DOMAIN,
        clientID:process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirectUri:encodeURIComponent(`${window.location.origin}/auth/callback`),
        scope:'openid profile email'
    })
}