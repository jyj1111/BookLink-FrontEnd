import * as Styled from './Styled';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import threePointUrl from '../../../images/threePoints.png';
import locationUrl from '../../../images/location.png';

import {
  bookClubsDelete,
  freesDelete,
  bookReportsDelete,
} from '../../../lib/apis/communities/delete/communitiesDeleteService';

const CommunitiesDetailForm = ({
  title,
  image = 'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png',
  writer,
  category,
  date,
  view_cnt,
  reply_cnt,
  like_cnt,
  content,
  bookInfo,
  location,
}) => {
  const [likeNum, setLikeNum] = useState(like_cnt);
  const [commentNum, setCommentNum] = useState(reply_cnt);

  const { id } = useParams();
  const navigate = useNavigate();

  const onDelete = async () => {
    if (category === '자유글') {
      const { status } = await freesDelete(id);
      console.log(status);
    } else if (category === '독후감') {
      const { status } = await bookReportsDelete(id);
      console.log(status);
    } else {
      const { status } = await bookClubsDelete(id);
      console.log(status);
    }
  };
  const onModify = () => {
    if (category === '자유글') {
      navigate(`/communities/boards/free-report/modify/${id}`, {
        state: { title, content },
      });
    } else if (category === '독후감') {
      navigate(`/communities/boards/book-report/modify/${id}`, {
        state: {
          title,
          content,
          bookInfo,
        },
      });
    } else {
      navigate(`/communities/book-clubs/modify/${id}`, {
        state: { title, location, content },
      });
    }
  };

  useEffect(() => {
    setLikeNum(like_cnt);
  }, [like_cnt]);

  useEffect(() => {
    setCommentNum(reply_cnt);
  }, [reply_cnt]);

  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Sub>
        <Styled.SubLeft>
          <Styled.WriterImg>
            <img src={image} />
          </Styled.WriterImg>
          <Styled.SubDetail>
            <Styled.SubDetailTop>
              <Styled.Writer>{writer}</Styled.Writer>
              <Styled.Category>{category}</Styled.Category>
            </Styled.SubDetailTop>
            <Styled.SubDetailBottom>
              <Styled.Date>{date}</Styled.Date>
              <Styled.View>조회수{view_cnt}</Styled.View>
              <Styled.Like>좋아요{likeNum}</Styled.Like>
              <Styled.Reply>댓글{commentNum}</Styled.Reply>
            </Styled.SubDetailBottom>
          </Styled.SubDetail>
        </Styled.SubLeft>
        <Styled.SubRight>
          <div>
            <Styled.Button onClick={onModify}>수정</Styled.Button>
            <Styled.Button onClick={onDelete}>삭제하기</Styled.Button>
          </div>
          {/*<div>
              <Styled.Button>신고하기</Styled.Button>
             </div>*/}
          <img src={threePointUrl} />
        </Styled.SubRight>
      </Styled.Sub>
      <div>
        {bookInfo && (
          <Styled.BookInfo>
            <Styled.BookImg src={bookInfo.cover} />
            <Styled.BookDetail>
              <p>{bookInfo.book_title}</p>
              <p>{bookInfo.authors}</p>
              <p>{bookInfo.publisher}</p>
              <p>{bookInfo.pud_date}</p>
            </Styled.BookDetail>
          </Styled.BookInfo>
        )}
        {location && (
          <Styled.Location>
            <img src={locationUrl} />
            <span>{location}</span>
          </Styled.Location>
        )}
        <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export default CommunitiesDetailForm;
