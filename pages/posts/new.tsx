import { ChangeEvent, FC, useState } from 'react';
import { blogAPI } from '../../api/api';

import Layout from '../../components/common/Layout/layout';
import Container from '../../components/ui-kit/Container/Container';
import NewPostWrap from '../../components/NewPostWrap/NewPostWrap';
import Input from '../../components/form/Input/Input';
import Textarea from '../../components/form/Textarea/Textarea';
import Title from '../../components/ui-kit/Title/Title';
import Button from '../../components/ui-kit/Button/Button';

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
          <Title title='Send your post please'></Title>
        </Container>
        <NewPostWrap>
          <Input placeholder='Title' onChange={handleChangeTitle} value={title} />
          <Textarea type='textarea' placeholder='Text' onChange={handleChangeText} value={title} />
          <Button onClick={createNewPost} disabled={isDisabled}>
            Submit
          </Button>
        </NewPostWrap>
      </Layout>
    </>
  );
};

export default NewPost;
