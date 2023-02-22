import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id); //로그인 안했으면 me가 없기 때문에 없는 경우를 항상 대비
    const [commentText, onChangeCommentText] = useInput("");
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: "relative", margin: 0 }}>
                <Input.TextArea
                    value={commentText}
                    onChange={onChangeCommentText}
                    rows={4}
                />
                <Button
                    style={{ position: "absolute", right: 0, bottom: -40 }}
                    type="primary"
                    htmlType="submit"
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: propTypes.object.isRequired,
};

export default CommentForm;
