enum HTTPMethod {
    GET,
    POST,
    DELETE,
    PUT,
}

type TRequest<
    Method extends HTTPMethod,
    Endpoint extends string,
    Request extends Record<string, any>,
    Response extends Record<string, any>,
> = {
    method: Method
    endpoint: Endpoint
    request: Request
    response: Response
}

export type TGetRequest<
    Endpoint extends string,
    Request extends Record<string, any>,
    Response extends Record<string, any>,
> = TRequest<HTTPMethod.GET, Endpoint, Request, Response>

export type TPostRequest<
    Endpoint extends string,
    Request extends Record<string, any>,
    Response extends Record<string, any>,
> = TRequest<HTTPMethod.POST, Endpoint, Request, Response>

export type TDeleteRequest<
    Endpoint extends string,
    Request extends Record<string, any>,
    Response extends Record<string, any>,
> = TRequest<HTTPMethod.DELETE, Endpoint, Request, Response>

export type TPutRequest<
    Endpoint extends string,
    Request extends Record<string, any>,
    Response extends Record<string, any>,
> = TRequest<HTTPMethod.PUT, Endpoint, Request, Response>
