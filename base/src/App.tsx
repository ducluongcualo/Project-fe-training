import React, { Suspense, lazy } from "react";
import { Spin } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "locales/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "locales/i18n";
// import { PageRoute } from "./constants/route";
import { uniqueId } from "lodash";
import NotFoundPage from "./pages/error/not-found.page";
// import LoginPage from "./pages/auth/login/login.page";
// import AuthRouter from "./components/auth/auth-router";
// import UserPage from "./pages/user/user.page";
// import ForgotPassPage from "./pages/auth/forgot-pass/forgot-pass.page";
// import ResetPassPage from "./pages/auth/reset-pass/reset-pass.page";
import Loader from "./components/Loader";
import TitlePage from "./components/TitlePage";
import Dashboard from "./pages/dashboard";
import MainLayout from "./layouts/MainLayout";

type RouteType = {
    index?: boolean;
    path?: string;
    title?: string;
    element: React.LazyExoticComponent<React.ComponentType<unknown>>;
    children?: RouteType[];
};

const APP_NAME = process.env.APP_NAME || "AO_ADMIN";
const titlePage = (title: string) => `${APP_NAME} - ${title}`;
const lazyLoadRoute = (pageName: string) => lazy(() => import(`./pages/${pageName}`));

const publicRoutes: RouteType[] = [
    {
        path: "/login",
        element: lazyLoadRoute("Base"),
        children: [
            {
                index: true,
                title: titlePage("Login"),
                element: lazyLoadRoute("auth/login/login.page"),
            },
        ],
    },
    {
        path: "/forgot-pass",
        element: lazyLoadRoute("Base"),
        children: [
            {
                index: true,
                title: titlePage("Forget Pass"),
                element: lazyLoadRoute("auth/forgot-pass/forgot-pass.page"),
            },
        ],
    },
    {
        path: "/reset-password",
        element: lazyLoadRoute("Base"),
        children: [
            {
                index: true,
                title: titlePage("Reset Password"),
                element: lazyLoadRoute("auth/reset-pass/reset-pass.page"),
            },
        ],
    },
];

const privateRoutes: RouteType[] = [
    {
        path: "/",
        title: titlePage("Dashboard"),
        element: lazyLoadRoute("Dashboard"),
    },
    {
        path: "/partners",
        element: lazyLoadRoute("Base"),
        children: [
            {
                index: true,
                title: titlePage("partners"),
                element: lazyLoadRoute("Partners"),
            },
            {
                path: "invite",
                title: titlePage("addPartners"),
                element: lazyLoadRoute("Partners/AddPartners"),
            },
            {
                path: "details/:id",
                title: titlePage("details"),
                element: lazyLoadRoute("Partners/Detail"),
            },
        ],
    },
];

const renderRoutes = (routes: RouteType[]) =>
    routes.map(({ element: Element, ...pageOptions }) => {
        const routeOptions: any = pageOptions.index ? { index: true } : { path: pageOptions.path };

        return (
            <Route
                key={uniqueId("__page__")}
                path={pageOptions.path}
                element={
                    <Suspense fallback={<Loader mode="reverse-color" />}>
                        <TitlePage title={pageOptions.title}>
                            <Element />
                        </TitlePage>
                    </Suspense>
                }
                {...routeOptions}
            >
                {pageOptions?.children?.map(({ element: ChildrenElement, ...childrenOption }) =>
                    childrenOption.index ? (
                        <Route
                            key={uniqueId("__page__")}
                            index
                            element={
                                <Suspense fallback={<Loader mode="reverse-color" />}>
                                    <TitlePage title={childrenOption.title}>
                                        <ChildrenElement />
                                    </TitlePage>
                                </Suspense>
                            }
                        />
                    ) : (
                        <Route
                            key={uniqueId("__page__")}
                            path={childrenOption.path}
                            element={
                                <Suspense fallback={<Loader mode="reverse-color" />}>
                                    <TitlePage title={childrenOption.title}>
                                        <ChildrenElement />
                                    </TitlePage>
                                </Suspense>
                            }
                        >
                            {childrenOption?.children && renderRoutes(childrenOption.children)}
                        </Route>
                    ),
                )}
            </Route>
        );
    });

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <I18nextProvider i18n={i18n}>
                <Suspense fallback={<Spin />}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Dashboard />}>{renderRoutes(publicRoutes)}</Route>
                            <Route element={<MainLayout />}>{renderRoutes(privateRoutes)}</Route>
                            <Route
                                path="*"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        <TitlePage title={titlePage("Page not found")}>
                                            <NotFoundPage />
                                        </TitlePage>
                                    </Suspense>
                                }
                            />
                            {/* <Route path={PageRoute.CLIENT} component={LoginPage} exact />
							<Route path={PageRoute.LOGIN} component={LoginPage} />
							<Route path={PageRoute.FORGOT_PASSWORD} component={ForgotPassPage} />
							<Route path={PageRoute.RESET_PASSWORD} component={ResetPassPage} />
							<Route path={PageRoute.TEST} component={UserPage} />
							<Route path={PageRoute.NOT_FOUND} component={NotFoundPage} />
							<AuthRouter>
								<Route path={PageRoute.USER} component={UserPage} />
							</AuthRouter> */}
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </I18nextProvider>
        </div>
    );
};

export default App;
