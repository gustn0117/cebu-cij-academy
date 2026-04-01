import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProgramsIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/programs/semi-sparta');
  }, [router]);

  return null;
}
