const config = {
    domain: 'http://localhost:9000',
    urlImg: 'http://localhost:9000/api/region/files',
    image: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '9000',
                pathname: '/api/region/files/**',
            },
        ],
    }
}

export default config