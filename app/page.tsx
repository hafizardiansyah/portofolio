import {
  IconBrandLaravel,
  IconBrandReact,
  IconBrandVercel,
} from '@tabler/icons-react';
import Experiences from './(components)/experiences';
import Projects from './(components)/projects';
import Introduction from './(components)/introduction';
import Tech from './(components)/tech';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start gap-16 md:gap-36'>
        <Introduction />
        <Tech />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
}
