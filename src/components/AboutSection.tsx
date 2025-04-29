import React from 'react';
import { Film, Edit3, Briefcase, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Video Editing', icon: <Film className="w-6 h-6" />, description: 'Professional-grade editing with attention to pacing, transitions, and narrative flow.' },
    { name: 'Color Grading', icon: <Edit3 className="w-6 h-6" />, description: 'Creating cohesive color palettes that enhance mood and visual storytelling.' },
    { name: 'Motion Graphics', icon: <Briefcase className="w-6 h-6" />, description: 'Dynamic text animations and visual effects that elevate content quality.' },
    { name: 'Sound Design', icon: <Award className="w-6 h-6" />, description: 'Precise audio editing and mixing to create immersive viewing experiences.' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm Sasangka Lambang Kurniawan, a passionate video editor with a keen eye for detail and a love for storytelling through visual media. With expertise in tools like CapCut, VN, and Canva, I transform raw footage into compelling narratives that captivate viewers.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey into video editing began five years ago, driven by a fascination with how visual storytelling can evoke emotions and convey messages in ways that words alone cannot. Since then, I've honed my craft through constant practice, learning, and collaborating with creative teams on various projects.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I believe that great video editing is invisible—it enhances the story without drawing attention to itself. My approach focuses on creating seamless, rhythmic edits that guide viewers through the narrative while maintaining their engagement from start to finish.
            </p>
          </div>
          
          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;