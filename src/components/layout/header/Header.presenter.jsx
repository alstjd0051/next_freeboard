import Link from "next/link";
import React from "react";

const HeaderUI = () => {
  return (
    <nav>
      <h3>
        <Link href="/">Message</Link>
      </h3>
      <h3>
        <Link href="/register">회원가입</Link>
      </h3>
      <h3>
        <Link href="/chat"> 채팅하기</Link>
      </h3>
      <h3>
        <Link href="/login">로그인</Link>
      </h3>
    </nav>
  );
};

export default HeaderUI;
