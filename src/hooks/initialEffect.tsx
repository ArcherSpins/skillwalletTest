import { useState, useEffect } from 'react';

const uri = 'https://server-iod7ndngxa-an.a.run.app';

export type Profile = {
  name: string | undefined;
  image: string | undefined;
  account: string | undefined;
  organization: string | undefined;
};
export type Badge = {
  cloudcerts: string | undefined;
  image: string | undefined;
  type: string | undefined;
  score: number[] | undefined;
  title: string | undefined;
  subtitle: string | undefined;
};

const useIndexEffect = () => {
  const [message, setMessage] = useState<string>('loading');
  const [profile, setProfile] = useState<Profile | null>();
  const [badges, setBadges] = useState<Badge[] | null>();

  useEffect(() => {
    console.log('fetch start');
    try {
      const fetchData = async () => {
        const res = await fetch(uri);
        console.log(res);
        const resJson = await res.json();
        setMessage(resJson && resJson.message);
        setProfile(resJson && resJson.profile);
        setBadges(resJson && resJson.badges);
      };
      fetchData();
    } catch (err) {
      console.log(err);
      setMessage('error');
    }
    return () => {
      console.log('clear');
    };
  }, []);
  return { message, profile, badges };
};

export default useIndexEffect;
