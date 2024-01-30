import axios from "axios";

const apiInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export default apiInstance;

/*
	Example usages:

	// fetch a particular user
	const fetchUserData = async () => {
		if (!authenticatedUser) return;

		setLoading(true);

		try {
			const response = await apiInstance.get(`users/${authenticatedUser.email}/`);
			console.log(response.data);
			setUserDetails(response.data);
		} catch (error) {
			toast.error(`Failed to fetch user data: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	// add a content to users data
	const addContentToUser = async (data) => {
		if (!authenticatedUser) return;

		setLoading(true);
		if(!data) {
			toast.error("Please provide all data");
			return;
		}

		try {
			await apiInstance.post(`users/`, {
				email: authenticatedUser.email,
				data: {
					version: data.versionID,
					content: data.payload,
				},
			});

			toast.success("Data saved successfully");
		} catch (error) {
			toast.error("Error saving data", error.message);
		} finally {
			setLoading(false);
		}
	};
*/