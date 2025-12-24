'use client';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionCard = motion(Card);

export default function Projects() {
  const projects = [
    {
      name: 'Meraki House School',
      description:
        'Revamp DigiVerse version 1 with enhancement of business proposal and technology',
      flag: 'Landing Page',
      link: 'https://www.merakihouseschool.com/',
    },
    {
      name: 'DigiVerse 2.0',
      description:
        'Revamp DigiVerse version 1 with enhancement of business proposal and technology',
      flag: 'Learning Management System',
      link: 'https://digiverse-beta.telkom.co.id',
    },
    {
      name: 'DigiVerse 1.0',
      description:
        'Developing LMS Website for Telkom Corporate University using Laravel and REST API',
      flag: 'Learning Management System',
      link: 'https://digiverse.telkom.co.id/',
    },
    {
      name: 'Backend ICACB Telkomsel',
      description:
        'Enhancement & Migration From PHP to GO Language for Backend Apps ',
      flag: 'Backend Settlement Service',
    },
    {
      name: 'Excel & Email Generate Service',
      description:
        'Generating Excel Report and send via email automatically for Operational Monitoring Telkomsel',
      flag: 'Report Generating Service',
    },
    {
      name: 'Web Settlement Top Up & BUJT FLO JMTO',
      description:
        'Developing Web Application for Monitoring Top Up and BUJT FLO JMTO Telkomsel',
      flag: 'Web Monitoring Settlement Service',
    },
    {
      name: 'Web Settlement JMTO',
      description:
        'Web application for monitoring cash flow between Jasa Marga Tollroad Operator and the associated banks',
      flag: 'Web Monitoring Settlement Service',
    },
    {
      name: 'API Service RMT Jasa Marga',
      description:
        'Built REST APIs powering Jasamarga’s daily toll revenue monitoring on Android and iOS',
      flag: 'Restful API Service',
    },
    {
      name: 'Enhancement Mobile Apps Jasa Marga',
      description:
        'Enhancing Mobile Apps for Jasamarga Tollroad Operator to monitor daily toll revenue',
      flag: 'Mobile Apps Service',
    },
    {
      name: 'ICACB Telkomsel',
      description: 'Maintenance and Enhancement ICACB Web Operational V.2 ',
      flag: 'Enhancement & Maintenance Service',
    },
  ];

  return (
    <section aria-labelledby='projects-heading'>
      <div className='space-y-5 w-full pb-10'>
        <h2>PROJECTS</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {projects.map((project, index) => {
            const hasLink = !!project.link;
            const content = (
              <CardContent className='flex flex-col justify-between gap-5 px-3'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2 items-center'>
                    <div className='text-sm flex-1 font-semibold'>
                      {project.name}
                    </div>
                  </div>
                  <div className='text-sm line-clamp-2'>
                    {project.description}
                  </div>
                </div>
                <div className='flex gap-0.5 items-center text-sm font-light'>
                  {project.flag}
                </div>
              </CardContent>
            );

            return (
              <MotionCard
                className={cn(
                  'rounded-1 py-3',
                  hasLink && 'cursor-pointer' // hanya pointer kalau ada link
                )}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.99 }}
                key={index}
              >
                {hasLink ? (
                  <Link href={project.link!} target='_blank' rel='noreferrer'>
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
