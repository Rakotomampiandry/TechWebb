import localhost from "../localhost/localhost";

//Recuperer le Max cli
export const getMaxCli = async ()=>{
    const response = await localhost.get('/clients/Max_cli');
    return response.data;
}

//ajout client
export const postClient = async (data: {nom_cli: string})=>{
    const response = await localhost.post('/clients', data);
    return response.data;
}