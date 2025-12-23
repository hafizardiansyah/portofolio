'use client';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  IconApi,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconCalculator,
  IconServer,
} from '@tabler/icons-react';

const MotionCard = motion(Card);

interface Experience {
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: React.ReactNode;
}

export default function Experiences() {
  const experiences = [
    {
      name: 'Telkom Corporate University',
      role: 'Frontend Developer',
      period: 'AUG 2024 - PRESENT',
      description:
        'Revamping internal LMS and learning tools (DigiVerse) used by Telkom Group employees.',
      technologies: (
        <>
          <IconBrandJavascript />
          <IconBrandTypescript />
          <IconBrandTailwind />
          <IconBrandHtml5 />
          <IconApi />
          <IconBrandNextjs />
          <IconBrandReact />
          <IconBrandFigma />
          <IconBrandPhp />
          <IconBrandCss3 />
          <IconServer />
        </>
      ),
    },
    {
      name: 'Meraki House School',
      role: 'Fullstack Developer',
      period: 'NOV 2025 - PRESENT',
      description:
        'Building the school’s website and admission flow to support parents and staff onboarding.',
      technologies: (
        <>
          <IconBrandJavascript />
          <IconBrandTypescript />
          <IconBrandTailwind />
          <IconBrandHtml5 />
          <IconApi />
          <IconBrandNextjs />
          <IconBrandReact />
          <IconBrandFigma />
          <IconBrandPrisma />
          <IconBrandSupabase />
          <IconBrandVercel />
        </>
      ),
    },
    {
      name: 'PT. Swamedia Informatika',
      role: 'Fullstack Developer',
      period: 'FEB 2018 - JUL 2024',
      description:
        'Delivered various web & backend solutions for enterprise clients (Telkomsel, Jasamarga, JMTO, etc).',
      technologies: (
        <>
          <IconBrandJavascript />
          <IconBrandHtml5 />
          <IconApi />
          <IconBrandReact />
          <IconBrandFigma />
          <IconBrandPhp />
          <IconBrandCss3 />
          <IconBrandLaravel />
          <IconBrandGolang />
          <IconServer />
        </>
      ),
    },
  ];
  return (
    <div className='space-y-5 w-full pb-10'>
      <div className=''>PROFESSIONAL EXPERIENCES</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {experiences.map((experience: Experience, index) => (
          <MotionCard
            key={index}
            className='rounded-1 py-3 cursor-pointer'
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <CardContent className='flex flex-col justify-between gap-5 px-3 h-full'>
              <div className='flex flex-col gap-1 flex-1 h-full'>
                <div className='flex gap-2 items-center'>
                  <div className='text-sm flex-1 font-semibold'>
                    {experience.name}
                  </div>
                  <div className='text-xs shrink-0'>{experience.period}</div>
                </div>
                <div className='text-sm'>{experience.role}</div>
                <ul className='text-sm list-disc pl-4'>
                  <li>{experience.description}</li>
                </ul>
              </div>
              <div className='flex gap-0.5 items-center'>
                {experience.technologies}
              </div>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
