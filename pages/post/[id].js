import { getPostData } from "../../lib/posts.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  return {
    path: [
      {
        params: {
          id: "ssg-ssr",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getServerSideProps({ params, req }) {
  console.log(`req.cookies: ${JSON.stringify(req.cookies)}`);
}

export default function Post({ postDaata }) {
  const router = useRouter();

  useEffect(() => {
    const getText = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();

      alert(data.text);
    };
    getText();
  }, []);
  if (router.asPath) {
    return <div>Loading...</div>;
  }
}
