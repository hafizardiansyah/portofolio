import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Experiences from './(components)/experiences';
import Introduction from './(components)/introduction';
import Projects from './(components)/projects';
import Tech from './(components)/tech';
import Link from 'next/link';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Hafiz Ardiansyah',
    alternateName: 'Hafiz Ardiansyah',
    url: 'https://hafizardiansyah.my.id',
    jobTitle: 'Frontend Developer',
    headline: 'Frontend Developer specializing in React, Next.js, and Laravel',
    sameAs: [
      'https://github.com/hafizardiansyah',
      'https://www.linkedin.com/in/muhammad-hafiz-ardiansyah',
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
        <main className='flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-16 md:py-32 px-8 md:px-16 bg-white dark:bg-black sm:items-start gap-16 md:gap-36'>
          <Introduction />
          <Tech />
          <Experiences />
          <Projects />
          <div className='h-full flex justify-between items-center w-full'>
            <div>Crafted By Muhammad Hafiz Ardiansyah</div>
            <div className='flex gap-3 items-center'>
              <Link
                href={'https://www.linkedin.com/in/muhammad-hafiz-ardiansyah/'}
                target='_blank'
              >
                <IconBrandLinkedin />
              </Link>
              <Link href={'https://github.com/hafizardiansyah'} target='_blank'>
                <IconBrandGithub />
              </Link>
              <Link
                href={'https://www.instagram.com/muhammadhafiz.a/'}
                target='_blank'
              >
                <IconBrandInstagram />
              </Link>

              <Link href={'mailto:hafizardiansyah@gmail.com'} target='_blank'>
                <IconBrandGmail />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
