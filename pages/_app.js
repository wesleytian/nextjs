import "../styles/globals.css";
import "regenerator-runtime/runtime.js";
import React from "react";
import Layout from "../components/layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import ButtonAppBar from "../components/ButtonAppBar";
import Footer from "../components/Footer";
import JssProvider from "react-jss/lib/JssProvider";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<JssProvider>
				<ThemeProvider theme={theme}>
					<ButtonAppBar />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
			</JssProvider>
		</Layout>
	);
}

export default MyApp;

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Titillium Web"].join()
	},
	palette: {
		primary: {
			main: "#0070f3"
		},
		secondary: {
			main: "#FF8F0C"
		}
	}
});
