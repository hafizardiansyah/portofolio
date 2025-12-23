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
              I build fast, responsive interfaces with React and connect them to
              clean, maintainable APIs using modern JavaScript and Node.
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <IconBrandLaravel className='shrink-0' />
          <div className='flex flex-col gap-2'>
            <div>Laravel & PHP</div>
            <div className='text-sm text-muted-foreground'>
              I design robust backends with Laravel — from authentication and
              REST APIs to business logic and database design.
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <IconBrandVercel className='shrink-0' />
          <div className='flex flex-col gap-2'>
            <div>Vercel & NGINX Service</div>
            <div className='text-sm text-muted-foreground'>
              I deploy and optimize apps on Vercel and NGINX, focusing on
              performance, reliability, and smooth CI/CD workflows.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
