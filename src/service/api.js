const url = "https://jsonplaceholder.typicode.com/users";

function dataGroup(data) {
	return data.map((item) => {
		return { ...item, address: `${item.address.street}, ${item.address.suite}, ${item.address.city}` };
	});
}

export const getData = async (setData, setdataDisplay) => {
	fetch(url)
		.then((result) => result.json())
		.then((data) => {
			const groupData = dataGroup(data);

			setData(groupData);
			setdataDisplay(groupData);
		})
		.catch((err) => console.log("error => ", err));
};
