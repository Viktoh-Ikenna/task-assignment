import jwt from 'jwt-client';
import {JWTObject} from 'jwt-client';

export const saveToken = (token: any) => {
     jwt.keep(token);
};

export const getToken = () => {
     return jwt.get();
};

export const verifyToken = (): JWTObject | null => {
     try {
          jwt.remember();
          const token = jwt.get();
          return jwt.validate(token as any) as any;
     } catch (error) {
          console.error('Invalid or expired token', error);
          return null;
     }
};
