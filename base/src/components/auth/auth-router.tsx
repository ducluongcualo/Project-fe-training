import React from "react";
import { Navigate } from "react-router-dom";
import { Container } from "typedi";
import { PageRoute } from "../../constants/route";
import { HttpService } from "../../services/http.service";

interface IAuthRouter {
    children: JSX.Element;
}

const AuthRouter = ({ children }: IAuthRouter): React.ReactElement => {
    // Constantly ping user to check if token expired
    const httpService: HttpService = Container.get(HttpService);
    if (!httpService.tokenInfo) {
        return <Navigate to={PageRoute.LOGIN} />;
    }

    return children;
};

export default AuthRouter;
