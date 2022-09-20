class HttpGateway {
  get = async (url) => {
    const response = await fetch(url);
    const DTO = response.json();
    return DTO;
  };
}

export default HttpGateway;
