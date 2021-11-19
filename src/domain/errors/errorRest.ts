export class ErrorREST extends Error {
    public response: { status: number; message: string;};
 
     constructor(error: { status: number, message: string }, ...args: any) {
        super(...args);
        this.response = {status: error.status, message: error.message};
    }
 }

 // helpers | errors
 export const errorHelper = ({
     badRequest: {
         status: 400,
         message: "something wrong with your request"
     },
     LoginbadRequest: {
        status: 403,
        message:"auth faild"
    },
    missingParam: (param: string) => ({
        status: 422,
        message: `missing param: ${param}`
    }),

    duplicate: (param: string) => ({
        status: 409,
        message: `duplicate: ${param}`
    }),
    
    customBadRequest: (param: string) => ({
        status: 400,
        message: `bad request: ${param}`
    }),

    notFound: {
        status: 404,
        message: 'item not found'
    }
 })