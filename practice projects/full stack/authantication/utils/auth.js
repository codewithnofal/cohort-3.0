import jwt from 'jsonwebtoken';
import config from '../config/config.js';


export const generateTokens = ({userId}) => {
    const accessToken = jwt.sign({id: userId}, config.ACCESS_TOKEN_SECRETS, {expiresIn: '15min'} )
    const refreshToken = jwt.sign({id: userId}, config.REFRESH_TOKEN_SECRETS, {expiresIn: '7d'} )

    return {
        accessToken, refreshToken
    }
}