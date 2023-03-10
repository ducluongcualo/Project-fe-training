import { METHOD } from "constants/http";

export abstract class DTO {
    public abstract query: unknown;
    public abstract body: unknown;
    public abstract readonly url: string;
    public abstract readonly method: METHOD;
    public abstract readonly responseClass: new (...agrs: never[]) => unknown;
}

export class ResponseDTO<T> {
    constructor(public code: string, public msg: string, public data: T) {}
}
