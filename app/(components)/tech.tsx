import {
  IconBrandLaravel,
  IconBrandReact,
  IconBrandVercel,
} from '@tabler/icons-react';

export default function Tech() {
  return (
    <div className='space-y-5 max-w-6xl pb-10'>
      <div className='text-4xl'>
        I solve problems with{' '}
        <span className='italic text-5xl'>React, Laravel, and Vercel</span>
      </div>
      <div>
        I design and ship reliable web experiences end-to-end – from intuitive
        interfaces to scalable APIs and solid deployments.
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='flex items-start gap-2'>
          <IconBrandReact className='shrink-0' />
          <div className='flex flex-col gap-2'>
            <div>React, Node & JavaScript</div>
            <div className='text-sm text-muted-foreground'>
              I build fast, responsive interfaces with React and modern
              JavaScript — optimized for real users, not just pretty UIs.
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <IconBrandLaravel className='shrink-0' />
          <div className='flex flex-col gap-2'>
            <div>Laravel & PHP</div>
            <div className='text-sm text-muted-foreground'>
              I design robust backends with Laravel — handling authentication,
              REST APIs, and complex business logic used by thousands of users.
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <IconBrandVercel className='shrink-0' />
          <div className='flex flex-col gap-2'>
            <div>Vercel & NGINX Service</div>
            <div className='text-sm text-muted-foreground'>
              I deploy and optimize apps on Vercel and NGINX — with simple,
              reliable pipelines from code push to production.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
