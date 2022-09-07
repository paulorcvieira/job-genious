import api from 'services/api';

export const isAuthenticatedUser = async (token: string) => {
    try{
        const response = await api.post('/token/verify', { token }
        )

        if(response.status === 200) return true;

        return false
    } catch(error) {
        return false
    }
}
