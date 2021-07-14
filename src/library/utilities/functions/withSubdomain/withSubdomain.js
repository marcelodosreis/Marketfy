export function withSubdomain(getServerSideProps, domain) {
    return async (context) => {
        const urlHost = context.req?.headers?.host;
        const loginUrl = domain;
        const pageUrl = context.req.url.includes('?') && context.req.url.split('?')[0];

        if (context.res && urlHost !== loginUrl) {
            context.res.writeHead(301, {
                Location: `http://${loginUrl}/${pageUrl}`
            });
            context.res.end();
        }
        return await getServerSideProps(context);
    };
}
