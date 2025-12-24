import TypingText from '@/components/ui/shadcn-io/typing-text';

export default function Introduction() {
  return (
    <div className='space-y-10 max-w-4xl pb-10'>
      <h1>MUHAMMAD HAFIZ ARDIANSYAH | FRONTEND DEVELOPER</h1>
      <TypingText
        text={[
          "Hello, I'm Hafiz.",
          'Frontend Developer.',
          'Fast, reliable web apps.',
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter='|'
        className='text-3xl md:text-6xl font-bold'
        textColors={['#38bdf8', '#a855f7', '#facc15']}
        variableSpeed={{ min: 50, max: 120 }}
      />
      <div>
        I’m a Frontend Engineer with over 7 years of hands-on experience
        building smooth, modern, and reliable web applications. I’ve worked on
        many types of projects — from internal corporate systems to full-scale
        production apps — and I’m comfortable jumping into both new builds and
        existing codebases.
      </div>
    </div>
  );
}
