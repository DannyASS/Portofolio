const getAuthorization = () => {
	try {
		const encryptedData = localStorage.getItem("data");
		if (!encryptedData) return null;

		return encryptedData;
	} catch (error) {
		return null;
	}
};

export {
    getAuthorization
}