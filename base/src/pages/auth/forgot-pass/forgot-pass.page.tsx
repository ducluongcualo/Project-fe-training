import React, { useState } from "react";
import { Button, Row, Col, Image, Form, Input, Typography } from "antd";
import Container from "typedi";

//Icons
import userIcon from "assets/icons/ic_user.svg";
import bigLogoImage from "assets/images/bigLogo.png";
import successIcon from "assets/icons/ic_success.svg";
import failIcon from "assets/icons/ic_fail.svg";

import { LoadingStatus } from "constants/status";
import { AuthService } from "services/auth.service";
import { ForgotPassDTO, ForgotPassParam } from "shared/dto/forgot-pass.dto";
import styles from "./forgot-pass.module.scss";

const { Title, Text } = Typography;
const ForgotPassPage = (): React.ReactElement => {
    const authService = Container.get(AuthService);
    const [form] = Form.useForm();

    const [step, setStep] = useState(LoadingStatus.INIT);
    const [info, setInfo] = useState<string | undefined>("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

    const onFinish = (values: ForgotPassParam) => {
        setStep(LoadingStatus.LOADING);
        const forgotPassDTO = new ForgotPassDTO({ agentCode: values.agentCode });
        authService.getForgotPass(forgotPassDTO).then((result) => {
            const { data } = result;
            setStep(LoadingStatus.SUCCESS);
            setInfo(data.data);
        });
    };

    const SuccessUI = () => {
        return (
            <div className={styles.titleContainer}>
                <Image src={successIcon} preview={false}></Image>
                <Title level={3}>Đã gửi yêu cầu</Title>
                <p>Một email vừa được gửi đến {info}.</p>
                <p>Vui lòng kiểm tra hòm thư và làm theo hướng dẫn.</p>
            </div>
        );
    };

    const FailUI = () => {
        return (
            <div className={styles.titleContainer}>
                <Image src={failIcon} preview={false}></Image>
                <Title level={3}>Gửi yêu cầu thất bại</Title>
            </div>
        );
    };

    const DefaultUI = () => {
        return (
            <div>
                <div className={styles.titleContainer}>
                    <Title level={3}>Quên mật khẩu</Title>
                    <Text>Xác nhận email của bạn để tạo lại mật khẩu</Text>
                </div>
                <Row className={styles.form} justify="center">
                    <Form
                        className={styles.formLogin}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        form={form}
                        autoComplete="off"
                        onFieldsChange={() => {
                            const fieldsValue: { [key in string]: string } = form.getFieldValue("agentCode");
                            setIsSubmitDisabled(Object.values(fieldsValue).some((value) => !value));
                        }}
                    >
                        <Row>
                            <Form.Item
                                className={styles.formInput}
                                name="agentCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập email !",
                                    },
                                ]}
                            >
                                <Input
                                    className={styles.inputField}
                                    prefix={<img src={userIcon} alt="" />}
                                    placeholder="email"
                                />
                            </Form.Item>
                        </Row>

                        <Row justify="center">
                            <Form.Item>
                                <Button
                                    className={styles.btnLogin}
                                    htmlType="submit"
                                    type="primary"
                                    disabled={isSubmitDisabled}
                                >
                                    Gửi yêu cầu
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Row>
            </div>
        );
    };

    const genForm = () => {
        switch (step) {
            case LoadingStatus.FAIL: {
                return FailUI();
            }

            case LoadingStatus.SUCCESS: {
                return SuccessUI();
            }

            default: {
                return DefaultUI();
            }
        }
    };

    return (
        <div className={styles.fullScreen}>
            <Row className={styles.centerBox} justify="space-between">
                <Col span={12}>
                    <div>{genForm()}</div>
                </Col>
                <Col span={12} className={styles.formImageContainer}>
                    <Image preview={false} src={bigLogoImage} />
                </Col>
            </Row>
        </div>
    );
};

export default ForgotPassPage;
