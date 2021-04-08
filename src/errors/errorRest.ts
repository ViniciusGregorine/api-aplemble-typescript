export class ErrorREST extends Error {
    public response: { status: number; message: string;};
 
     constructor(error: { status: number, message: string }, ...args: any) {
        super(...args);
        this.response = {status: error.status, message: error.message};
    }
 }

 // helpers | errors
 export const error = ({
     badRequest: {
         status: 400,
         message: "something weong with your request"
     },
     LoginbadRequest: {
        status: 403,
        message:"cannot find email or password"
    }
 })