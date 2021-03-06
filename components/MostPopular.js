import React from "react";
import Grid from "@material-ui/core/Grid";
import { List, Typography } from "@material-ui/core";
import PostSnippet from "./PostSnippet";

export default function MostPopular() {
	return (
		<Grid item container direction="column" xs={12}>
			<Typography variant="h5">
				<b>🔥 Most Popular</b>
			</Typography>

			<List>
				<PostSnippet
					title={"I Nearly Failed High School"}
					link={"/posts/gpa"}
				/>
				<PostSnippet
					title={"How I Found My Dream Job and 3 Tips On How You Can, Too"}
					link={"/posts/dream-job"}
				/>
				<PostSnippet
					title={"3 Reasons Why You Should Move to Reno"}
					link={"/posts/reno"}
				/>
			</List>
		</Grid>
	);
}
