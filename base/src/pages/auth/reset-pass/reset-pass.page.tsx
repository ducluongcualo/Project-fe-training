import React from "react";
import { Button, Col, Form, Image, Input, Row, Typography } from "antd";

//Icons
import passwordIcon from "assets/icons/ic_password.svg";
import backgroundImage from "assets/images/background.png";
import bigLogoImage from "assets/images/bigLogo.png";
import { ResetPassQuery } from "shared/dto/reset-pass.dto";

//styles
import styles from "./reset-pass.module.scss";

const { Title, Text } = Typography;

const ResetPassPage = () => {
    const [form] = Form.useForm();

    // const RESET_PASSWORD_ERROR_MAP: { [key in STATUS_CODE]?: { status: string, msg: string } } = {
    //     [STATUS_CODE.TOKEN_NOT_FOUND]: { status: LOADING_STATUS.FAIL, msg: 'Token không tồn tại!' },
    //     [STATUS_CODE.TOKEN_INVALID]: { status: LOADING_STATUS.FAIL, msg: 'Token không đúng định dạng!' },
    //     [STATUS_CODE.PASSWORD_NOT_MATCH_EMAIL_PHONE_AGENT_CODE]: {
    //         status: LOADING_STATUS.FAIL,
    //         msg: 'Mật khẩu không được chứa Email hoặc Mã đại lý hoặc Số điện thoại!'
    //     }
    // };

    const onFinish = (values: ResetPassQuery) => {
        console.log(values);
    };

    return (
        <div className={styles.fullScreen} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Row className={styles.centerBox} justify="space-between">
                <Col span={12}>
                    <Row justify="center">
                        <Title level={3} style={{ paddingTop: "1rem" }}>
                            Đổi mật khẩu
                        </Title>
                    </Row>
                    <Row justify="center">
                        <Text>Bạn cần phải tạo mật khẩu mới trước khi sử dụng</Text>
                    </Row>
                    <Row className={styles.form} justify="center">
                        <Form
                            form={form}
                            className={styles.formLogin}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Row>
                                <Form.Item
                                    className={styles.formInput}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu !",
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        className={styles.inputField}
                                        prefix={<img src={passwordIcon} alt="" />}
                                        placeholder="Mật khẩu mới"
                                    />
                                </Form.Item>
                            </Row>
                            <Row>
                                <Form.Item
                                    className={styles.formInput}
                                    name="confirmPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu!",
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        className={styles.inputField}
                                        prefix={<img src={passwordIcon} alt="" />}
                                        placeholder="Nhập lại"
                                    />
                                </Form.Item>
                            </Row>
                            <Row justify="center">
                                <Form.Item>
                                    <Button className={styles.btnLogin} htmlType="submit" type="primary">
                                        Xác nhận
                                    </Button>
                                </Form.Item>
                            </Row>
                        </Form>
                    </Row>
                </Col>
                <Col span={12} className={styles.formImageContainer}>
                    <Image preview={false} src={bigLogoImage}></Image>
                </Col>
            </Row>
        </div>
    );
};

export default ResetPassPage;
