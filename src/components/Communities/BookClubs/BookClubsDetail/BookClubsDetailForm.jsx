import { useState, useEffect } from 'react';
import { bookClubsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';
import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import { dateFormat } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
const BookClubsDetailForm = () => {
  const [info, SetInfo] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const { data } = await bookClubsDetail(Number(id));
    SetInfo(data);
  };
  useEffect(() => {
    getDetail();
  }, []);
  const {
    writer,
    image,
    title,
    content,
    location,
    date,
    reply_cnt,
    view_cnt,
    like_cnt,
    liked,
    replies,
  } = info;

  return (
    <MainContainerDiv>
      <LikeShareForm like_cnt={like_cnt} liked={liked} category={'독서 모임'} />
      <CommunitiesDetailContentsDiv>
        <CommunitiesDetailForm
          title={title}
          writer={writer}
          image={image}
          category={'독서 모임'}
          date={dateFormat(date)}
          view_cnt={view_cnt}
          reply_cnt={reply_cnt}
          like_cnt={like_cnt}
          content={content}
          location={location}
          liked={liked}
        />
        <CommunitiesCommentForm replies={replies} category={'독서 모임'} />
      </CommunitiesDetailContentsDiv>
    </MainContainerDiv>
  );
};

export default BookClubsDetailForm;
