import React, { Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "locales/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "locales/i18n";

import { PageRoute } from "./constants/route";

import NotFoundPage from "./pages/error/not-found.page";
import LoginPage from "./pages/auth/login/login.page";
import AuthRouter from "./components/auth/auth-router";
import UserPage from "./pages/user/user.page";
import ForgotPassPage from "./pages/auth/forgot-pass/forgot-pass.page";
import ResetPassPage from "./pages/auth/reset-pass/reset-pass.page";

const App = (): React.ReactElement => {
	return (
		<div className="App">
			<I18nextProvider i18n={i18n}>
				<Suspense fallback={<Spin />}>
					<BrowserRouter>
						<Switch>
							<Route path={PageRoute.CLIENT} component={LoginPage} exact />
							<Route path={PageRoute.LOGIN} component={LoginPage} />
							<Route path={PageRoute.FORGOT_PASSWORD} component={ForgotPassPage} />
							<Route path={PageRoute.RESET_PASSWORD} component={ResetPassPage} />
							<Route path={PageRoute.TEST} component={UserPage} />
							<Route path={PageRoute.NOT_FOUND} component={NotFoundPage} />
							<AuthRouter>
								<Route path={PageRoute.USER} component={UserPage} />
							</AuthRouter>
						</Switch>
					</BrowserRouter>
				</Suspense>
			</I18nextProvider>
		</div>
	);
};

export default App;
