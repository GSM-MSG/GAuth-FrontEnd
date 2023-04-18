import Head from 'next/head';

interface Props {
  title?: string;
}

const SEOConfig = ({ title = '' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="학교 Oauth 서비스" />
      <meta name="description" content="학교 계정 통합 소셜 로그인 서비스" />
      <meta name="author" content="msg" />
      <meta
        name="keyword"
        content="GAuth, Gauth, gauth, GAUTH, GSM, gsm, 광주소프트웨어마이스터고등학교, Oauth, oauth"
      />

      <meta name="og:site_name" content={`GAuth`} />
      <meta name="og:title" content={`${title}`} />
      <meta name="og:description" content="학교 Oauth 서비스" />
      <meta name="og:description" content="학교 계정 통합 소셜 로그인 서비스" />
      <meta name="og:url" content="https://gauth.co.kr" />
      <meta name="og:image" content="https://gauth.co.kr/favicon.ico" />
      <meta name="og:type" content="website" />
    </Head>
  );
};

export default SEOConfig;
