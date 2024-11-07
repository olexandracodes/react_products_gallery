import React from "react";
import { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Theme>
			<style jsx global>{`
				html,
				body {
					margin: 0;
					background-color: #f8f8f8;
				}
			`}</style>
			<Component {...pageProps} />
		</Theme>
	);
};

export default App;
