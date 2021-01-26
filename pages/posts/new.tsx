import { ChangeEvent, FC, useState } from 'react';
import { blogAPI } from '../../api/api';

import Layout from '../../components/layout';
import Container from '../../components/Container/Container';
import NewPostWrap from '../../components/NewPostWrap/NewPostWrap';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

const NewPost: FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const isDisabled = !title || !text;

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const createNewPost = (e: Event) => {
    e.preventDefault();
    blogAPI.createNewPost(title, text).finally(() => {
      setTitle('');
      setText('');
    });
  };

  return (
    <>
      <Layout>
        <Container>
          <Title title="Send your post please"></Title>
        </Container>
        <NewPostWrap>
          <Input placeholder="Title" onChange={handleChangeTitle} value={title} />
          <Textarea type="textarea" placeholder="Text" onChange={handleChangeText} value={title} />
          <Button onClick={createNewPost} disabled={isDisabled}>
                        Submit
          </Button>
        </NewPostWrap>
      </Layout>
    </>
  );
};

export default NewPost;
