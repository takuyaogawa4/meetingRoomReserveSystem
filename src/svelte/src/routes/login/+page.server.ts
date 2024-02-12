import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../blog/$types";


export const load PageServerLoad = (event) => {

}


export const actions: Actions = {
    const formData = object.fromEntries(await event.request.formData());

    if(!formData.email || !formdata.password){
    return {
        data: formData,
        error: 'missing required field';
    }
}
const{email,password} = formData as {email: string, password: string}
    const error = null;

    if(error){
        return {
            data: formdata(),
            error: 'username password in-correct'

        }
}
    event.cookies.set('AuthorizationToken','Bearer')
}