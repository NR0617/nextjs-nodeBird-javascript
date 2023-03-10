import React, { useCallback, useState, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
    const { ImagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState("");
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText("");
    }, []);
    const onCLickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    return (
        <Form
            style={{ margin: "10px 0 20px" }}
            encType="multipart/form-data"
            onFinish={onSubmit}
        >
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onCLickImageUpload}>이미지 업로드</Button>
                <Button
                    type="primary"
                    style={{ float: "right" }}
                    htmlType="submit"
                >
                    짹짹
                </Button>
            </div>
            <div>
                {ImagePaths.map((el) => {
                    <div key={el} style={{ display: "inline-block" }}>
                        <img src={el} style={{ width: "200px" }} alt={el} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>;
                })}
            </div>
        </Form>
    );
};

export default PostForm;
