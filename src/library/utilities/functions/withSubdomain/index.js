export function withSubdomain(getServerSideProps, domainUrl, pagePath) {
    return async (context) => {
        const urlHost = context.req?.headers?.host;
        console.log(pagePath);

        if (context.res && urlHost !== domainUrl) {
            // await context.res.writeHead(301, {
            //     Location: `http://${domainUrl}/${pagePath}`
            // });
            // await context.res.end();
        }
        return await getServerSideProps(context);
    };
}
