export function withUserAuth(getServerSideProps) {
    return async (context) => {
        const isLogged = !!context.req.cookies[process.env.NEXT_PUBLIC_AUTH_KEY];

        if (!isLogged) {
            context.res.setHeader('location', '/');
            context.res.statusCode = 302;
            context.res.end();
        }
        context['userIsLogged'] = !!isLogged;

        return await getServerSideProps(context);
    };
}
