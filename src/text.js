export const aboutMeAlt = `Hello, I'm Alex. I'm 23 years old and have recently finished my Mechatronics Engineering (BASc) Degree at the University of British Columbia in Vancouver. I have experience with building consulting and automotive engineering, working at AME Group and Magna International respectively. I was also a member of UBC's Formula Electric team for 1.5 years and UBC's Uncrewed Aircraft Systems team for 2 years. I am a FIRST Robotics and SHAD alumni. I'd like to research and explore the fields of Machine Learning and Robotics as I grow and explore my career. I am excited to explore new topics and delve into exciting projects.`
export const aboutMe1 = `I recently completed my Mechanical Engineering (BASc) at the University of British Columbia, where I developed a strong interest in intelligent systems, autonomy, and the software that powers modern robotics. I enjoy projects that span disciplines, from designing and integrating physical systems to developing the software that enables autonomous behaviour.`
export const aboutMe2 = `As I begin my career, I'm looking for opportunities to contribute to teams building the next generation of intelligent robotic systems, exploring modern robotics topics such as physical AI, soft robotics, and machine learning. My long-term goal is to help develop robots that are more capable, adaptable, and useful in real-world environments.`
export const experience = {
  magna: {
    company: 'Magna International',
    role: 'Mechatronics CO-OP',
    link: '',
    date: [
      'Jan',
      'Aug 2025'
    ],
    desc: [
      'Developed internal automation tools for pre- and post-processing of simulations (FEA, MBD, Inertial Analysis) using TypeScript and Python, streamlining the workflow for global CAE teams',
      'Architected and deployed "Inertia+", a tool that automated component inertia calculations and report generation, leading to upwards of 26% time savings (270+ hours saved per quarter), transforming manual engineering calculations into scalable software solutions',
      'Spearheaded the creation of "Collab Space," a web-based platform using JavaScript and Python to visualize FEA results, enabling real-time collaboration and faster design iteration between global teams'
    ],
    keySkills: ['Engineering software development', 'Python', 'TypeScript', 'Data visualization', 'Cross-functional collaboration']
  },
  ame1: {
    company: 'AME Group',
    role: 'Mechanical CO-OP',
    link: '',
    date: [
      'Sept',
      'Dec 2023',
    ],
    desc: [
      'Designed 15+ HVAC, Hydronic, and Plumbing layouts and schematics for mixed residential spaces in the Vancouver area using Revit and AutoCAD',
      'Optimized AutoCAD schedule/schematic creation using Python and Revit plugins to reduce repetitive drafting work',
      'Prototyped automatic schematic creation in AutoCAD using PyAutoCAD'
    ],
    keySkills: ['AutoCAD', 'Revit', 'Process improvement', 'CAD automation', 'Python']
  },
  ame2: {
    company: 'AME Group',
    role: 'QAQC CO-OP',
    link: '',
    date: [
      'May',
      'Aug 2024'
    ],
    desc: [
      'Wrote C# Macros to automate engineering workflows and Revit tasks such as creating detailed schematics from MEP systems, simplifying drafting tasks, and converting AutoCAD details',
      'Led BIM improvement projects across AME, such as designing and standardizing Revit Schematics and Details, reducing reliance on AutoCAD and enabling engineers to work entirely within Revit, the modern alternative, increasing project efficiency between multiple teams'
    ],
    keySkills: ['Engineering automation', 'Python', 'C#', 'Process improvement', 'CAD automation']
  },
  lra3d: {
    company: 'LRA3D',
    role: 'Mechanical Designer / Fabricator Intern',
    link: '',
    date: [
      'May',
      'Aug 2023'
    ],
    desc: [
      'Designed and fabricated large-scale custom installations using Rhino 7, Mach 4, and CNC machinery, including a 20’ tall plywood guitar prop',
      'Scripted presets for CNC Routers and Hotwire machines using Mach 4 to increase machine efficiency by 20%',
      'Wired and assembled CNC Hotwire machine with EtherCAT technology to modernize production, reducing the CPU load by 30%'
    ],
    keySkills: ['CNC programming', 'Rhino', 'Manufacturing', 'EtherCAT', 'Automation', 'Digital fabrication']
  },
  fe: {
    company: 'UBC Formula Electric',
    role: 'Mechanical Team',
    link: '',
    date: [
      'May 2024',
      'Present'
    ],
    desc: [
      'Developed simulation tools to predict vehicle performance and support data-driven design decisions',
      'Combined vehicle dynamics modelling, simulation, and testing to guide engineering trade-offs and improve competition performance',
      'Planned, coordinated, and executed vehicle testing to validate simulation models and support iterative design improvements'
    ],
    keySkills: ['MATLAB', 'Vehicle dynamics', 'Simulation', 'Data analysis', 'Testing', 'Engineering optimization']
  },
  uas: {
    company: 'UBC Uncrewed Aircraft Systems',
    role: 'Payload Team',
    link: '',
    date: [
      'Sept 2022',
      'Sept 2024'
    ],
    desc: [
      'Designed and prototyped payload deployment mechanisms for autonomous aircraft while exploring mechanical solutions for precision payload delivery using viscous dampers with electromagnetic clutches and guided parachutes',
      'Designed and manufactured a Carbon Fibre enclosure for our scale model taxi enclosure',
      'Achieved 2nd place in Phase 1 and 3rd place in Phase 2 of the 2024 AEAC competition',
    ],
    keySkills: ['UAV systems', 'Mechanical design', 'Composite manufacturing', 'Payload integration', 'Onshape', 'Rapid prototyping']
  },
  frc: {
    company: 'FRC Team 610',
    role: 'Programming Lead',
    link: 'https://youtu.be/PK4EeCKIfhQ',
    date: [
      'Oct 2017',
      'Mar 2021'
    ],
    desc: [
      'Led software and mechanical development on a competitive robotics platform, such as prototyping on an indexer to manage the game pieces and move them throughout the 150lb robot',
      'Designed components in SolidWorks and manufactured both prototype and production parts using CNC machinery',
      'Improved the aiming of the robot using reflection-based computer vision in Java'
    ],
    keySkills: ['Computer vision', 'Java', 'Robotics', 'CNC machining', 'Mechanical design', 'Prototyping']
  }
}
export const projects = {
  spiceChanger: {
    project: 'Spice Dispensing Robot',
    extra: 'UBC Mech 423 - Final Project',
    link: 'https://github.com/alextheelliott/SpiceChanger',
    date: [
      'Jan',
      'Feb 2026'
    ],
    desc: [
      'Designed a desktop robotic dispensing system integrating embedded controls, custom electronics, sensing, and desktop software',
      'Created a voice-enabled user interface using C# WindowForms to implement fast and reliable controls and advanced restocking features, with a focus on user convenience',
      'Implemented embedded controls on an MSP430 to control a stepper motor, enable closed-loop DC motor positioning, and manage system feedback from the IR sensor and limit switch'
    ],
    keySkills: ['Embedded systems', 'C', 'C#', 'Motor control', 'Sensors', 'Robotics integration', 'UI development']
  },
  capstone: {
    project: 'Litter Collecting Drone',
    extra: 'UBC Mech 458 - Capstone Project',
    link: '',
    date: [
      'Sep 2025',
      'Apr 2026'
    ],
    desc: [
      'Developed and built a medium-sized autonomous quadcopter platform capable of detecting and retrieving litter in difficult terrain, such as hiking trails',
      'Designed and manufactured a custom quadcopter drone, using outward-canted motors to negate downdraft effects on the litter',
      'Programmed the drone using a PixHawk flight controller with Mission Planner firmware, using GPS enabled loiter mode',
      'Integrated mechanical design, flight control, onboard perception, and machine learning using YOLOv8, trained on the Trash Annotated in Context (TACO) dataset, to demonstrate a complete autonomous robotics pipeline'
    ],
    keySkills: ['Computer vision', 'YOLOv8', 'Robotics', 'UAV', 'Embedded AI', 'Raspberry Pi Zero 2 W', 'Autonomous systems', 'CAD']
  },
  designComp: {
    project: 'UBC Senior Engineering Design Competition',
    extra: '',
    link: '',
    date: [
      'Mar 2026'
    ],
    desc: [
      'Competed in a hackathon-style robotics challenge to span an increasing gap using VEX EDR parts',
      'Created a winch hook system using a catapult to launch a grappling hook to the far end of the table'
    ],
    keySkills: []
  },
  robocan: {
    project: 'Robot Reusable Cup Return',
    extra: 'TOHacks CockRoachDB Award Winner',
    link: 'https://devpost.com/software/robocan',
    date: [
      'May 2022'
    ],
    desc: [
      'Built a mobile robotic cup-return to collect and sort through reusable NFC-tagged cups, to aid in reusable cup initiatives',
      'Explored computer vision models, such as YOLO, allowing the robot to track potential cup-returners and path towards them for maximum convenience',
      'Developed methodology to determine cup position and ID based on NFC sensors and I2C-controlled ultrasonic sensors, communicating with a MySQL database to store user data and coordinate returns'
    ],
    keySkills: ['Robotics', 'Python', 'Computer Vision', 'Databases', 'Embedded systems', 'NFC', 'I2C']
  },
  sunnyview: {
    project: 'Sunnyview School Accessible Toys',
    extra: '',
    link: '',
    date: [
      'Mar',
      'May 2021'
    ],
    desc: [
      'Designed an Arduino robotic hand to simplify the physical playing of a piano into a series of button presses by mimicking finger movement using Servo actuators',
      'Developed using universal design principles for children with learning and physical disabilities, such as Cerebral Palsy'
    ],
    keySkills: ['Accessible design', 'Arduino', 'Robotics', 'SolidWorks']
  },
  i6engine: {
    project: 'I6 Engine Model',
    extra: '',
    link: '',
    date: [
      ''
    ],
    desc: [
      'Designed a simple inline 6-cylinder car engine. (Only the crankshaft and pistons). Inline 6 engines have 3 pairs of cylinders and are timed to keep the engine balanced. Offset cylinders can be used to improve engine efficiency which led to the idea of using 2 crankshafts (one from each cylinder pair) to keep the engine balanced while using the new concept.',
      'The major flaw of this concept is connecting the two crankshafts as they are spinning counter to each other so a belt would not work. (SolidWorks)'
    ],
    keySkills: ['SolidWorks', 'CAD', 'Ideation']
  }
}