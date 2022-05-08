const useJWTAuthToken = () => {
    const accessToken = (email) => {
        fetch('https://xtreme-cars-2022.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken)
            })
    }
    return accessToken;
};

export default useJWTAuthToken;