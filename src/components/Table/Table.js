import React, { useEffect, useState } from "react";
import { getData } from "../../service/api";
import Searchbar from "../Search/Searchbar";
import "./table.css";

function Table() {
	const [data, setData] = useState([]);
	const [dataDisplay, setdataDisplay] = useState([]);

	useEffect(() => {
		getData(setData, setdataDisplay);
	}, []);

	return (
		<div className="container-table">
			<Searchbar data={data} setdataDisplay={setdataDisplay} />
			<div className="table-responsive">
				<table className="styled-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{dataDisplay.length === 0 ? (
							<tr>
								<td colSpan={6} className="noData">
									No Data
								</td>
							</tr>
						) : (
							dataDisplay.map((item, index) => (
								<tr key={item.id}>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.address}</td>
									<td>{item.phone}</td>
									<td>
										<a className="btn-action-mail" href={`mailto: ${item.email}`}>
											Mail
										</a>
										<a className="btn-action-call" href={`tel: ${item.phone}`}>
											Call
										</a>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Table;
