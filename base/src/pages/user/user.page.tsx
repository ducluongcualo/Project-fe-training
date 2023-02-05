import React from "react";
import { observer } from "mobx-react";
import { Config } from "services/config.service";
import Container from "typedi";

const UserPage = observer(() => {
	const configService = Container.get(Config);

	return (
		<>
			<h1>{configService.theme}</h1>
			<button onClick={() => configService.toggleTheme()}>Toggle theme</button>
		</>
	);
});

export default UserPage;
