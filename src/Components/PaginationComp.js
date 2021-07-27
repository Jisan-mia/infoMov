import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
}));

const PaginationComp = ({ setPage, numberOfPages = 10 }) => {
	const handlePageChange = (page) => {
		setPage(page);
		window.scroll(0, 0);
	};
	const classes = useStyles();

	return (
		<div
			className={classes.root}
			style={{
				display: "flex",
				justifyContent: "center",
				width: "100%",
				margin: " 20px 0 40px 0",
				background: "white",
			}}
		>
			<Pagination
				count={numberOfPages}
				variant="outlined"
				color="primary"
				hideNextButton
				hidePrevButton
				onChange={(e) => handlePageChange(e.target.textContent)}
			/>
		</div>
	);
};

export default PaginationComp;
