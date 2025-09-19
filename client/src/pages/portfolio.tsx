import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
import { TypingAnimation } from '@/components/typing-animation';
import { SmoothScroll } from '@/components/smooth-scroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Sun, 
  Moon, 
  Menu, 
  Download, 
  Users, 
  TrendingDown, 
  Award, 
  Check, 
  Building, 
  Code, 
  Cpu, 
  Wifi, 
  Smartphone,
  Layers,
  Cloud,
  Server,
  Linkedin,
  Mail,
  Github,
  Phone,
  MapPin,
  CheckCircle
} from 'lucide-react';

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation items
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  // Skills data
  const skills = [
    { name: 'Java', category: 'primary' },
    { name: 'Spring Boot', category: 'primary' },
    { name: 'Microservices', category: 'primary' },
    { name: 'Azure Event Hub', category: 'azure' },
    { name: 'Azure Functions', category: 'azure' },
    { name: 'Azure App Services', category: 'azure' },
    { name: 'Azure Front Door', category: 'azure' },
    { name: 'Kafka', category: 'data' },
    { name: 'Redis', category: 'data' },
    { name: 'MySQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Docker', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Python (Beginner)', category: 'language' }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      title: 'Lead Engineer',
      company: 'Mobiquity (Hexaware)',
      period: 'Jul 2023 - Present',
      icon: Building,
      color: 'blue',
      achievements: [
        'Onboarded 10 million users to the banking platform',
        'Implemented remote configuration functionality reducing manual intervention by 30%',
        'Deployed comprehensive monitoring and tracing system using DataDog'
      ],
      current: true
    },
    {
      id: 2,
      title: 'Senior Full-Stack Developer',
      company: 'Cignex',
      period: 'Mar 2021 - Jun 2023',
      icon: Code,
      color: 'green',
      achievements: [
        'Migrated Liferay to Spring Boot, saving $1 per user license cost',
        'Achieved 95% SLA ticket resolution rate for 800+ client queries'
      ],
      current: false
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'BlackStraw AI',
      period: 'Dec 2020 - Mar 2021',
      icon: Cpu,
      color: 'purple',
      achievements: [],
      current: false
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'eInfochips (Arrow Company)',
      period: 'Jan 2017 - Dec 2020',
      icon: Wifi,
      color: 'orange',
      achievements: [
        'Built IoT ultrasound monitoring platform for medical universities',
        'Developed Kafka engine processing 500 messages per second'
      ],
      current: false
    },
    {
      id: 5,
      title: 'Engineer',
      company: 'Samcom Technobrains',
      period: 'Jul 2016 - Jan 2017',
      icon: Smartphone,
      color: 'teal',
      achievements: [
        'Developed employee tracking Android application with location services'
      ],
      current: false
    }
  ];

  // Certifications data
  const certifications = [
    { name: 'Azure Developer', provider: 'Microsoft Certified', icon: Award, color: 'blue' },
    { name: 'Azure Architect', provider: 'Microsoft Certified', icon: Layers, color: 'blue' },
    { name: 'AWS Developer', provider: 'Amazon Certified', icon: Cloud, color: 'orange' },
    { name: 'GCP Associate', provider: 'Google Certified', icon: Server, color: 'green' }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'contact'];
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - 200;
          const sectionHeight = element.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // TODO: Implement Replit form handler integration
    console.log('Form submitted:', Object.fromEntries(formData));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      duration: 3000,
    });

    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-primary font-heading">
              Akshat Desai
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <SmoothScroll key={item.href} to={item.href}>
                  <a 
                    href={item.href}
                    className={`text-muted-foreground hover:text-foreground transition-colors ${
                      activeSection === item.href.slice(1) ? 'text-primary' : ''
                    }`}
                    data-testid={`nav-${item.href.slice(1)}`}
                  >
                    {item.label}
                  </a>
                </SmoothScroll>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle theme"
                data-testid="theme-toggle"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                data-testid="mobile-menu-toggle"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <SmoothScroll key={item.href} to={item.href}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </a>
                  </SmoothScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_25%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_25%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white dark:bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center border-0">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="mb-8">
                    {/* TODO: Replace with actual profile image */}
                    <img 
                      src="/profile.jpg" 
                      alt="Akshat Desai profile photo" 
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-purple-200 shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://i.pravatar.cc/300";
                      }}
                      data-testid="profile-image"
                    />
                  </div>
                  
                  {/* Name */}
                  <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4" data-testid="hero-name">
                    Akshat Desai
                  </h1>
                  
                  {/* Animated Subtitle */}
                  <div className="mb-8">
                    <TypingAnimation 
                      texts={[
                        'Cloud-Native Architect',
                        '9+ Years in FinTech', 
                        'Azure Expert',
                        '10-Million-User Platforms'
                      ]}
                      className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium"
                      data-testid="typing-animation"
                    />
                  </div>
                  
                  {/* Download CV Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      asChild
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                      data-testid="download-cv"
                    >
                      <a href="/AkshatDesai_Resume.pdf" download>
                        <Download className="w-5 h-5 mr-2" />
                        Download CV
                      </a>
                    </Button>
                    {/* TODO: Replace with actual resume file */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16" data-testid="about-title">
                About Me
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* About Text */}
                <div data-testid="about-description">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Over 9+ years of experience in Software Development and Cloud Architecture, with proven expertise in building and maintaining large-scale, high-availability applications in the banking and consumer-facing domains.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I specialize in Microsoft Azure cloud infrastructure, microservices architecture, and have led teams to deliver innovative solutions that serve millions of users while maintaining the highest standards of security and performance.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently serving as a Lead Engineer at Mobiquity (Hexaware), where I architect and implement scalable banking solutions with a focus on cloud-native technologies and financial compliance.
                  </p>
                </div>
                
                {/* Quick Facts */}
                <div data-testid="achievements">
                  <h3 className="font-heading font-semibold text-xl mb-6">Key Achievements</h3>
                  <div className="space-y-4">
                    <Card className="hover:shadow-lg transition-shadow" data-testid="achievement-users">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mr-4">
                            <Users className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-lg text-emerald-600">10M+ Users</div>
                            <div className="text-sm text-muted-foreground">Successfully onboarded</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-lg transition-shadow" data-testid="achievement-reduction">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-4">
                            <TrendingDown className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-lg text-blue-600">30% Reduction</div>
                            <div className="text-sm text-muted-foreground">In manual interventions</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-lg transition-shadow" data-testid="achievement-sla">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 mr-4">
                            <Award className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-lg text-purple-600">95% SLA</div>
                            <div className="text-sm text-muted-foreground">Ticket resolution rate</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16" data-testid="skills-title">
                Technical Skills
              </h2>
              
              <div className="flex flex-wrap gap-3 justify-center" data-testid="skills-container">
                {skills.map((skill) => (
                  <Badge 
                    key={skill.name}
                    variant="outline"
                    className="px-4 py-2 font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer skill-chip bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16" data-testid="experience-title">
                Professional Experience
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                
                {/* Experience Items */}
                <div className="space-y-12">
                  {experiences.map((exp) => {
                    const IconComponent = exp.icon;
                    return (
                      <div key={exp.id} className="relative flex items-start" data-testid={`experience-${exp.id}`}>
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 ${exp.current ? 'bg-primary' : 'bg-secondary'} rounded-full border-4 border-background flex items-center justify-center ml-1 md:ml-4`}>
                            <div className={`w-2 h-2 ${exp.current ? 'bg-white' : 'bg-muted-foreground'} rounded-full`}></div>
                          </div>
                        </div>
                        <Card className="ml-6 md:ml-8 w-full hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <div className="flex items-center mb-2 md:mb-0">
                                <div className={`w-10 h-10 bg-${exp.color}-100 dark:bg-${exp.color}-900/30 rounded-full flex items-center justify-center mr-3`}>
                                  <IconComponent className={`w-5 h-5 text-${exp.color}-600`} />
                                </div>
                                <div>
                                  <h3 className="font-heading font-semibold text-lg">{exp.title}</h3>
                                  <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                              </div>
                              <Badge variant={exp.current ? 'default' : 'secondary'} className="text-sm">
                                {exp.period}
                              </Badge>
                            </div>
                            {exp.achievements.length > 0 && (
                              <ul className="text-muted-foreground space-y-2">
                                {exp.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16" data-testid="certifications-title">
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="certifications-grid">
                {certifications.map((cert) => {
                  const IconComponent = cert.icon;
                  return (
                    <Card 
                      key={cert.name}
                      className="group cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200"
                      data-testid={`certification-${cert.name.toLowerCase().replace(' ', '-')}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`bg-${cert.color}-100 dark:bg-${cert.color}-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-${cert.color}-200 dark:group-hover:bg-${cert.color}-900/50 transition-colors`}>
                          <IconComponent className={`w-8 h-8 text-${cert.color}-600`} />
                        </div>
                        <h3 className="font-heading font-semibold text-lg mb-2">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-16" data-testid="contact-title">
                Get In Touch
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div data-testid="contact-form-section">
                  <form onSubmit={handleContactSubmit} className="space-y-6" data-testid="contact-form">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-2 resize-none"
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                      data-testid="button-submit"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
                
                {/* Contact Info */}
                <div data-testid="contact-info-section">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-4">Let's Connect</h3>
                      <p className="text-muted-foreground mb-6">
                        I'm always interested in discussing new opportunities, innovative projects, or potential collaborations. Feel free to reach out!
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div>
                      <h4 className="font-medium mb-4">Find me on</h4>
                      <div className="flex space-x-4" data-testid="social-links">
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="hover:scale-110 transition-transform duration-200"
                          data-testid="link-linkedin"
                        >
                          <a href="https://linkedin.com/in/akshatdesaice" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="hover:scale-110 transition-transform duration-200"
                          data-testid="link-email"
                        >
                          <a href="mailto:akshatdesai.ce@gmail.com">
                            <Mail className="w-5 h-5" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="hover:scale-110 transition-transform duration-200"
                          data-testid="link-github"
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Direct Contact */}
                    <Card data-testid="contact-details">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-primary mr-3" />
                            <span className="text-muted-foreground">akshatdesai.ce@gmail.com</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 text-primary mr-3" />
                            <span className="text-muted-foreground">+91-7405839825</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-primary mr-3" />
                            <span className="text-muted-foreground">Ahmedabad, Gujarat, India</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8" data-testid="footer">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              &copy; 2024 Akshat Desai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
