import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CommunityIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/community/notice');
  }, [router]);

  return null;
}
