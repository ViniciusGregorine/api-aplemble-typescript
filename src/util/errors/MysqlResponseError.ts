import { InternalError } from "./internal-error";

export class DbResponseError extends InternalError{
    constructor(message: string) {
        const internalMessage =
          'Unexpected error returned by the Daba Base service';
        super(`${internalMessage}: ${message}`);
      }
}