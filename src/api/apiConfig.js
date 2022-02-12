const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'be8625e8961ba0c2d954cfc358a6364f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;