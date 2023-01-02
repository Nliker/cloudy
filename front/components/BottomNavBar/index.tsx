import React from 'react';
import { CgUserList } from 'react-icons/cg';
import { SlCloudUpload } from 'react-icons/sl';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { BottomContainer, MobileNavItem, MobileNavList, UploadBtn, Wrapper } from './styles';
import useSWR from 'swr';

// interface Props {
//   showModal: (e: any) => void;
// }

const BottomNavBar = ({ roomId }: { roomId?: string }) => {
  // const { mutate: uploadModalMutate } = useSWR('showUploadModal');
  const { data, mutate: showModalMutate } = useSWR('showModalState');

  const onClickUploadModal = () => {
    showModalMutate(
      {
        ...data,
        upload: true,
      },
      false,
    );
  };

  return (
    <Wrapper>
      <BottomContainer>
        <MobileNavList>
          <MobileNavItem>
            <NavLink to={'/my_page'}>
              <MdOutlineManageAccounts />
              마이 페이지
            </NavLink>
          </MobileNavItem>
          <MobileNavItem>
            <h1>
              <NavLink to={'/main_page'}>
                <HiOutlineHome />
                Cloudy
              </NavLink>
            </h1>
          </MobileNavItem>
          <MobileNavItem>
            <NavLink to={'/people_management'}>
              <CgUserList />
              친구목록 관리
            </NavLink>
          </MobileNavItem>
          {roomId && (
            <MobileNavItem>
              <div className={'upload_btn'} onClick={onClickUploadModal}>
                <SlCloudUpload />
                <span>업로드</span>
              </div>
            </MobileNavItem>
          )}
        </MobileNavList>
      </BottomContainer>
    </Wrapper>
  );
};

export default BottomNavBar;
