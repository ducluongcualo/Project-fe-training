import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "typedi";
import { Button, Col, Form, Image, Input, Row, Typography } from "antd";

import { LoginDTO } from "shared/dto/login.dto";
//Icons
import bigLogoImage from "assets/images/bigLogo.png";
import userIcon from "assets/icons/ic_user.svg";
import passwordIcon from "assets/icons/ic_password.svg";

//Styles
import styles from "./login.module.scss";
import { AuthService } from "services/auth.service";
import { PageRoute } from "constants/route";
import { useTranslation } from "react-i18next";
import { LANGUAGE } from "constants/language";

const { Title, Text } = Typography;

const LoginPage = () => {
    const authService = Container.get(AuthService);
    const history = useNavigate();
    const [form] = Form.useForm();
    const { t, i18n } = useTranslation();

    const signIn = async (value: { email: string; password: string }) => {
        authService
            .signIn(new LoginDTO(value))
            .then(() => {
                history(PageRoute.USER);
            })
            .catch((e) => {
                alert(e.message);
            });
    };

    useEffect(() => {
        i18n.changeLanguage(LANGUAGE.VI);
    }, [i18n]);

    return (
        <div className={styles.fullScreen}>
            <Row className={styles.centerBox} justify="space-between">
                <Col span={12}>
                    <div className={styles.titleContainer}>
                        <Title level={3}>Chào bạn</Title>
                        <Text>Đăng nhập để xem và quản lý thông tin</Text>
                    </div>
                    <Row className={styles.form} justify="center">
                        <Form
                            className={styles.formLogin}
                            initialValues={{ remember: true }}
                            onFinish={signIn}
                            form={form}
                            autoComplete="off"
                        >
                            <Row>
                                <Form.Item
                                    className={styles.formInput}
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: t("Please input email"),
                                        },
                                    ]}
                                >
                                    <Input
                                        className={styles.inputField}
                                        autoFocus={true}
                                        prefix={<img src={userIcon} alt="" />}
                                        placeholder={"Email"}
                                    />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Form.Item
                                    className={styles.formInput}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: t("Please input password"),
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        className={styles.inputField}
                                        prefix={<img src={passwordIcon} alt="" />}
                                        placeholder={t("Password")}
                                    />
                                </Form.Item>
                            </Row>
                            <Row justify="end">
                                <Link
                                    className={styles.forgotPassword}
                                    to={{
                                        pathname: "/forgot-password",
                                    }}
                                >
                                    {t("Forgot password")}
                                </Link>
                            </Row>
                            <Row justify="center">
                                <Form.Item>
                                    <Button className={styles.btnLogin} htmlType="submit" type="primary">
                                        {t("Login")}
                                    </Button>
                                </Form.Item>
                            </Row>
                        </Form>
                    </Row>
                </Col>
                <Col span={12} className={styles.formImageContainer}>
                    <Image preview={false} src={bigLogoImage} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
