import React, { useEffect, useState } from "react";
import "./searchbar.css";

function Searchbar(props) {
	const { data, setdataDisplay } = props;
	const [filter, setFilter] = useState("name");
	const [key, setKey] = useState("");

	useEffect(() => {
		let newData = data.filter((item) => {
			return item[filter].toUpperCase().includes(key.toUpperCase());
		});
		setdataDisplay(newData);
	}, [filter, key, data, setdataDisplay]);

	return (
		<div className="d-flex container-bar">
			<div className="search-bar">
				<label className="label">Search </label>
				<input
					tabIndex={1}
					className="style-bar"
					onChange={(e) => {
						setKey(e.target.value);
					}}
					type="text"
					placeholder="Search..."
				/>
			</div>

			<div className="filter-bar">
				<label className="label">Filter By </label>
				<select
					tabIndex={2}
					className="style-bar"
					onChange={(e) => {
						setFilter(e.target.value);
					}}
					id="filter"
				>
					<option value="name">Name</option>
					<option value="email">Email</option>
					<option value="phone">Phone</option>
					<option value="address">Address</option>
				</select>
			</div>
		</div>
	);
}

export default Searchbar;
