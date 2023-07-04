import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../../images/BookLink_Logo.svg';
import searchLogo from '../../../images/search_icon.svg';
import * as Styled from './HeaderStyled';

const HeaderContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState(path);

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('도서');

  const [isLoginned, setIsLoginned] = useState(true); // 후에 로그인 상태 전역 관리.

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectClick = () => {
    setIsCategoryListOpen(!isCategoryListOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsCategoryListOpen(false);
  };

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <Styled.HeaderContainer>
      <Styled.LogoDiv>
        <Styled.StyledLink to="/books">
          <Styled.Img src={Logo} />
        </Styled.StyledLink>
      </Styled.LogoDiv>
      <div>
        <Styled.StyledLink
          to="/home"
          active={(pathName === '/home').toString()}
        >
          홈
        </Styled.StyledLink>
        <Styled.LinkWithMargin
          to="/books"
          active={(pathName === '/books').toString()}
        >
          책방
        </Styled.LinkWithMargin>
        <Styled.StyledLink
          to="/book-meetings"
          active={(pathName === '/book-meetings').toString()}
        >
          커뮤니티
        </Styled.StyledLink>
      </div>
      <div>
        <Styled.SearchDiv>
          <Styled.SelectContainer>
            <Styled.CategorySelect
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="도서">도서</option>
              <option value="게시글">게시글</option>
            </Styled.CategorySelect>
            <Styled.SelectSpan onClick={handleSelectClick}>
              {selectedValue}
            </Styled.SelectSpan>
            {isCategoryListOpen && (
              <Styled.OptionsList>
                <Styled.OptionItem onClick={() => handleOptionClick('도서')}>
                  도서
                </Styled.OptionItem>
                <Styled.OptionItem onClick={() => handleOptionClick('게시글')}>
                  게시글
                </Styled.OptionItem>
              </Styled.OptionsList>
            )}
          </Styled.SelectContainer>
          <div style={{ position: 'relative' }}>
            <Styled.SearchInput
              type="search"
              placeholder="책을 검색해보세요!"
            />
            <div
              style={{
                position: 'absolute',
                top: '0.143rem',
                right: '0.429rem',
                cursor: 'pointer',
              }}
            >
              <img
                src={searchLogo}
                alt="검색 아이콘"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Styled.SearchDiv>
      </div>
      <Styled.HeaderProfileDiv>
        {isLoginned ? (
          <Fragment>
            <Styled.ProfileText>00님 환영합니다!</Styled.ProfileText>
            <Styled.ProfileImgDiv>
              {/* <img src="" alt="프로필 이미지" /> */}
            </Styled.ProfileImgDiv>
          </Fragment>
        ) : (
          <Fragment>
            <div>로그인</div>
            <div>회원가입</div>
          </Fragment>
        )}
      </Styled.HeaderProfileDiv>
    </Styled.HeaderContainer>
  );
};

export default HeaderContainer;
