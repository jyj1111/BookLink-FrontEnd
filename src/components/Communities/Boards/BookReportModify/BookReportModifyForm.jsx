//import React from 'react'
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
import TopicContentForm from '../../../Common/TopicContent/TopicContentForm';
import BookSearchForm from '../../../Common/Search/BookSearch/BookSearchForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { bookReportsModify } from '../../../../lib/apis/communities/modify/communitiesModifyService';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../../styles/globalStyled';
const BookReportModifyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { title, content, bookInfo } = location.state;

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    //formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    const { title, content } = data;
    const { status } = await bookReportsModify(title, content, id);
    console.log(status);
    navigate(`/communities/boards/book-report/${id}`);
  };

  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };

  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BookSearchForm bookInfo={bookInfo} setValue={setValue} />
          <TopicContentForm
            title={title}
            content={content}
            register={register}
            onContentsHandler={onContentsHandler}
          />
          <button type="submit">수정하기</button>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookReportModifyForm;
